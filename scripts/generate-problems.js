import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { collectProblems, DIFFICULTIES, toUiProblem } from "../lib/problems.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUTPUT = path.join(ROOT, "public", "problems.json");

const { grouped } = collectProblems(ROOT);
const problems = [];

for (const difficulty of DIFFICULTIES) {
  for (const problem of grouped[difficulty]) {
    problems.push(toUiProblem(problem, difficulty));
  }
}

problems.sort((a, b) => a.number - b.number);

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
fs.writeFileSync(OUTPUT, JSON.stringify({ problems }, null, 2), "utf8");

console.log(`Wrote ${OUTPUT} (${problems.length} problems)`);
