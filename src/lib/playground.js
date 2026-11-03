// Runs user code in a Web Worker so infinite loops can be killed and
// console output can be mapped back to the user's line numbers.

const PRELUDE = `
const __fmt = (v, depth = 0, seen = new WeakSet()) => {
  if (typeof v === "string") return depth === 0 ? v : JSON.stringify(v);
  if (typeof v === "bigint") return v + "n";
  if (typeof v === "symbol" || typeof v === "undefined") return String(v);
  if (typeof v === "function") return "ƒ " + (v.name || "(anonymous)") + "()";
  if (v === null || typeof v !== "object") return String(v);
  if (v instanceof Error) return v.name + ": " + v.message;
  if (seen.has(v)) return "[Circular]";
  if (depth > 3) return Array.isArray(v) ? "[…]" : "{…}";
  seen.add(v);
  let out;
  if (Array.isArray(v)) {
    const items = v.slice(0, 100).map((x) => __fmt(x, depth + 1, seen));
    if (v.length > 100) items.push("… " + (v.length - 100) + " more");
    out = "[" + items.join(", ") + "]";
  } else if (v instanceof Map) {
    out = "Map(" + v.size + ") {" + [...v].map(([k, x]) => __fmt(k, depth + 1, seen) + " => " + __fmt(x, depth + 1, seen)).join(", ") + "}";
  } else if (v instanceof Set) {
    out = "Set(" + v.size + ") {" + [...v].map((x) => __fmt(x, depth + 1, seen)).join(", ") + "}";
  } else {
    const name = v.constructor && v.constructor.name && v.constructor.name !== "Object" ? v.constructor.name + " " : "";
    out = name + "{" + Object.keys(v).map((k) => k + ": " + __fmt(v[k], depth + 1, seen)).join(", ") + "}";
  }
  seen.delete(v);
  return out;
};
const __line = () => {
  const frames = String(new Error().stack).split("\\n");
  for (const f of frames) {
    const m = f.match(/:(\\d+):(\\d+)\\)?\\s*$/);
    if (m && +m[1] > __OFFSET__) return +m[1] - __OFFSET__;
  }
  return null;
};
const __send = (level) => (...args) =>
  self.postMessage({ type: "log", level, text: args.map((a) => __fmt(a)).join(" "), line: __line() });
console.log = __send("log");
console.info = __send("info");
console.debug = __send("debug");
console.warn = __send("warn");
console.error = __send("error");
console.table = __send("log");
console.clear = () => self.postMessage({ type: "clear" });
self.addEventListener("unhandledrejection", (e) => {
  const r = e.reason;
  self.postMessage({ type: "error", text: "Uncaught (in promise) " + (r instanceof Error ? r.name + ": " + r.message : __fmt(r)), line: null });
});
self.postMessage({ type: "ready" });
`;

export function runInWorker(code, { onMessage }) {
  const prelude = PRELUDE.replace("__OFFSET__", "0");
  const offset = prelude.split("\n").length - 1; // lines before user code
  const source = prelude.replaceAll("__OFFSET__", String(offset)) + code + "\n;self.postMessage({ type: 'done' });";
  const url = URL.createObjectURL(new Blob([source], { type: "text/javascript" }));
  const worker = new Worker(url);
  const start = performance.now();

  worker.onmessage = (e) => onMessage({ ...e.data, elapsed: performance.now() - start });
  worker.onerror = (e) => {
    e.preventDefault();
    const line = e.lineno ? e.lineno - offset : null;
    onMessage({
      type: "error",
      text: e.message.startsWith("Uncaught") ? e.message : `Uncaught ${e.message}`,
      line: line > 0 ? line : null,
    });
    onMessage({ type: "done", failed: true, elapsed: performance.now() - start });
  };

  return () => {
    worker.terminate();
    URL.revokeObjectURL(url);
  };
}
