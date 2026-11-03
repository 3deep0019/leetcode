import { useEffect, useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import { runInWorker } from "../lib/playground.js";

const STORE_KEY = "playground:v1";
const DEFAULT_CODE = `// Write JavaScript here and press Run (${
  navigator.platform.includes("Mac") ? "⌘" : "Ctrl"
}+Enter)
const nums = [3, 1, 2];
console.log("sorted:", [...nums].sort());
console.warn("this is a warning");
console.error(new Error("something broke"));
`;

function load() {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY)) ?? {};
  } catch {
    return {};
  }
}

const ICONS = { warn: "⚠", error: "✖", info: "ℹ" };

export default function Playground() {
  const saved = useRef(load()).current;
  const [code, setCode] = useState(saved.code ?? DEFAULT_CODE);
  const [layout, setLayout] = useState(saved.layout ?? "row");
  const [ratio, setRatio] = useState(saved.ratio ?? 0.55);
  const [logs, setLogs] = useState([]);
  const [running, setRunning] = useState(false);
  const [status, setStatus] = useState("");
  const stopRef = useRef(null);
  const codeRef = useRef(code);
  const containerRef = useRef(null);
  const rootRef = useRef(null);
  const [fullscreen, setFullscreen] = useState(false);
  const consoleEndRef = useRef(null);
  const idRef = useRef(0);
  codeRef.current = code;

  useEffect(() => {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify({ code, layout, ratio }));
    } catch {
      /* storage unavailable */
    }
  }, [code, layout, ratio]);

  useEffect(() => () => stopRef.current?.(), []);

  useEffect(() => {
    const onChange = () => setFullscreen(document.fullscreenElement === rootRef.current);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  function toggleFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      rootRef.current?.requestFullscreen?.();
    }
  }

  useEffect(() => {
    consoleEndRef.current?.scrollIntoView({ block: "end" });
  }, [logs]);

  function stop() {
    stopRef.current?.();
    stopRef.current = null;
    setRunning(false);
  }

  function run() {
    stop();
    setLogs([]);
    setStatus("");
    setRunning(true);
    stopRef.current = runInWorker(codeRef.current, {
      onMessage: (msg) => {
        if (msg.type === "log" || msg.type === "error") {
          const entry = {
            id: idRef.current++,
            level: msg.type === "error" ? "error" : msg.level,
            text: msg.text,
            line: msg.line,
          };
          setLogs((prev) => [...prev, entry]);
        } else if (msg.type === "clear") {
          setLogs([]);
        } else if (msg.type === "done") {
          setRunning(false);
          setStatus(`${msg.failed ? "Failed" : "Finished"} in ${msg.elapsed.toFixed(1)} ms`);
        }
      },
    });
  }

  function startDrag(e) {
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    const horizontal = layout === "row";
    const move = (ev) => {
      const pos = horizontal ? ev.clientX - rect.left : ev.clientY - rect.top;
      const size = horizontal ? rect.width : rect.height;
      let next = pos / size;
      setRatio(Math.min(0.85, Math.max(0.15, next)));
    };
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      document.body.classList.remove("is-resizing");
    };
    document.body.classList.add("is-resizing");
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  }

  const runShortcut = navigator.platform.includes("Mac") ? "⌘↵" : "Ctrl+↵";
  const editorPane = (
    <section className="pg-pane" style={{ flexBasis: `${ratio * 100}%` }} key="editor">
      <div className="pg-toolbar">
        <span className="editor-label">Editor · script.js</span>
        <div className="editor-actions">
          {running && (
            <button type="button" className="btn btn-danger" onClick={stop}>
              Stop
            </button>
          )}
          <button type="button" className="btn btn-primary" onClick={run} title={`Run (${runShortcut})`}>
            Run {runShortcut}
          </button>
        </div>
      </div>
      <div className="monaco-wrapper">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          theme="vs-dark"
          value={code}
          onChange={(v) => setCode(v ?? "")}
          onMount={(editor, monaco) =>
            editor.addAction({
              id: "run-playground",
              label: "Run Code",
              keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter],
              run: () => run(),
            })
          }
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 2,
            padding: { top: 12 },
          }}
        />
      </div>
    </section>
  );

  const consolePane = (
    <section className="pg-pane pg-console" style={{ flexBasis: `${(1 - ratio) * 100}%` }} key="console">
      <div className="pg-toolbar">
        <span className="editor-label">Console</span>
        <div className="editor-actions">
          <span className="pg-status">{running ? "Running…" : status}</span>
          <button type="button" className="btn btn-ghost" onClick={() => setLogs([])}>
            Clear
          </button>
        </div>
      </div>
      <div className="console-output">
        {logs.length === 0 ? (
          <div className="console-empty">Console is empty. Run your code to see output.</div>
        ) : (
          logs.map((entry) => (
            <div key={entry.id} className={`console-row console-${entry.level}`}>
              <span className="console-icon">{ICONS[entry.level] ?? ""}</span>
              <pre className="console-text">{entry.text}</pre>
              <span className="console-line">{entry.line ? `script.js:${entry.line}` : ""}</span>
            </div>
          ))
        )}
        <div ref={consoleEndRef} />
      </div>
    </section>
  );

    return (
    <div className="playground" ref={rootRef}>
      <div className="pg-controls">
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => setLayout((l) => (l === "row" ? "column" : "row"))}
        >
          {layout === "row" ? "Stack vertically" : "Side by side"}
        </button>
        <button type="button" className="btn btn-ghost pg-fullscreen" onClick={toggleFullscreen}>
          {fullscreen ? "Exit full screen" : "Full screen"}
        </button>
      </div>
      <div ref={containerRef} className={`pg-split pg-${layout}`}>
        {editorPane}
        <div className="pg-divider" onPointerDown={startDrag} role="separator" />
        {consolePane}
      </div>
    </div>
  );
}
