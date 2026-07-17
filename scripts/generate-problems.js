import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { collectProblems, DIFFICULTIES, toUiProblem } from "../lib/problems.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUTPUT_1 = path.join(ROOT, "public", "problems.json");
const OUTPUT_2 = path.join(ROOT, "docs", "problems.json");

const { grouped } = collectProblems(ROOT);
const problems = [];

for (const difficulty of DIFFICULTIES) {
  for (const problem of grouped[difficulty]) {
    problems.push(toUiProblem(problem, difficulty));
  }
}

problems.sort((a, b) => a.number - b.number);

fs.mkdirSync(path.dirname(OUTPUT_1), { recursive: true });
fs.mkdirSync(path.dirname(OUTPUT_2), { recursive: true });
fs.writeFileSync(OUTPUT_1, JSON.stringify({ problems }, null, 2), "utf8");
fs.writeFileSync(OUTPUT_2, JSON.stringify({ problems }, null, 2), "utf8");

console.log(`Wrote ${OUTPUT_1} (${problems.length} problems)`);
console.log(`Wrote ${OUTPUT_2} (${problems.length} problems)`);
