#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  DIFFICULTIES,
  collectProblems,
  htmlToPlainText,
} from "./lib/problems.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = __dirname;
const OUTPUT_DIR = path.join(ROOT, "compiled");

const RUNNER_TEMPLATE = String.raw`
// --- Test runner (auto-generated) ---
const PROBLEM_TESTS = __PROBLEM_TESTS__;

function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function normalizeGroupAnagrams(value) {
  return value
    .map((group) => [...group].sort())
    .sort((left, right) => left.join("").localeCompare(right.join("")));
}

function runCase(problem, testCase, index) {
  const fn = globalThis[problem.fn];
  if (typeof fn !== "function") {
    throw new Error("Function " + problem.fn + " is not defined");
  }

  let args = JSON.parse(JSON.stringify(testCase.args)).map((arg) =>
    problem.usesListNode && Array.isArray(arg) ? arrayToList(arg) : arg
  );
  let result = fn(...args);

  if (problem.mutatesInput) {
    result = args[0];
  } else if (problem.usesListNode && Array.isArray(testCase.expected)) {
    result = listToArray(result);
  }

  let passed = deepEqual(result, testCase.expected);
  if (!passed && problem.fn === "groupAnagrams") {
    passed = deepEqual(
      normalizeGroupAnagrams(result),
      normalizeGroupAnagrams(testCase.expected)
    );
  }

  const label = problem.id + " example " + (index + 1);
  if (passed) {
    console.log("PASS " + label);
    return true;
  }

  console.log("FAIL " + label);
  console.log("  got     ", JSON.stringify(result));
  console.log("  expected", JSON.stringify(testCase.expected));
  return false;
}

function runTests(filter) {
  const normalizedFilter = filter ? filter.toLowerCase() : null;
  const selected = PROBLEM_TESTS.filter((problem) => {
    if (!normalizedFilter) return true;
    return (
      problem.id.toLowerCase() === normalizedFilter ||
      (problem.fn && problem.fn.toLowerCase() === normalizedFilter)
    );
  });

  if (selected.length === 0) {
    console.error("No problems matched filter:", filter);
    console.error("Available:", PROBLEM_TESTS.map((p) => p.id + (p.fn ? " (" + p.fn + ")" : "")).join(", "));
    process.exit(1);
  }

  let passed = 0;
  let failed = 0;
  let skipped = 0;

  for (const problem of selected) {
    if (problem.cases.length === 0) {
      console.log("SKIP " + problem.id + " (no parsed examples — add cases manually)");
      skipped++;
      continue;
    }

    for (let i = 0; i < problem.cases.length; i++) {
      if (runCase(problem, problem.cases[i], i)) passed++;
      else failed++;
    }
  }

  console.log("");
  console.log(passed + " passed, " + failed + " failed, " + skipped + " skipped");
  if (failed > 0) process.exit(1);
}

const filter = process.argv[2];
if (require.main === module) {
  runTests(filter);
}
`.trim();

function buildJsHelpers() {
  return `// Shared helpers for linked-list problems
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function arrayToList(values) {
  const dummy = new ListNode(0);
  let current = dummy;
  for (const value of values) {
    current.next = new ListNode(value);
    current = current.next;
  }
  return dummy.next;
}

function listToArray(head) {
  const values = [];
  while (head) {
    values.push(head.val);
    head = head.next;
  }
  return values;
}
`;
}

function readmeToComment(readme, folderName) {
  const plain = htmlToPlainText(readme);
  const lines = plain
    .split("\n")
    .map((line) => " * " + line.replace(/\*\//g, "* /"));
  return ["/*", ` * ${folderName}`, " *", ...lines, " */"].join("\n");
}

function buildJsProblemBlock(problem) {
  const parts = [readmeToComment(problem.readme, problem.folderName), ""];

  if (problem.signatureStub) {
    parts.push(problem.signatureStub);
  } else {
    parts.push(
      `// ${problem.folderName} — implement your solution below`,
      "// globalThis.myFunction = function(...) {",
      "//   // your code",
      "// };",
    );
  }

  parts.push("");
  return parts.join("\n");
}

function buildJsFile(difficulty, problems) {
  const tests = problems.map((problem) => ({
    id: problem.folderName,
    fn: problem.functionName,
    usesListNode: problem.usesListNode,
    mutatesInput: problem.mutatesInput,
    cases: problem.examples,
  }));

  const header = [
    "#!/usr/bin/env node",
    `/**`,
    ` * LeetCode ${difficulty} — practice file`,
    ` *`,
    ` * Implement each function below, then run tests:`,
    ` *   node compiled/${difficulty.toLowerCase()}.js`,
    ` *   node compiled/${difficulty.toLowerCase()}.js 1-two-sum`,
    ` *   node compiled/${difficulty.toLowerCase()}.js twoSum`,
    ` */`,
    "",
    buildJsHelpers(),
    "",
    "// --- Problems ---",
    "",
  ].join("\n");

  const body = problems.map(buildJsProblemBlock).join("\n");
  const runner = RUNNER_TEMPLATE.replace(
    "__PROBLEM_TESTS__",
    JSON.stringify(tests, null, 2),
  );

  return header + body + "\n" + runner + "\n";
}

function compile() {
  const { grouped, skipped } = collectProblems(ROOT);

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }

  for (const difficulty of DIFFICULTIES) {
    const problems = grouped[difficulty];
    const mdPath = path.join(OUTPUT_DIR, `${difficulty.toLowerCase()}.md`);
    const jsPath = path.join(OUTPUT_DIR, `${difficulty.toLowerCase()}.js`);

    const mdHeader = `# LeetCode ${difficulty} Problems\n\n${problems.length} problem(s)\n\n`;
    fs.writeFileSync(
      mdPath,
      mdHeader + problems.map((p) => p.markdown).join("\n"),
      "utf8",
    );

    fs.writeFileSync(jsPath, buildJsFile(difficulty, problems), "utf8");
    fs.chmodSync(jsPath, 0o755);

    const withTests = problems.filter((p) => p.examples.length > 0).length;
    console.log(
      `Wrote ${mdPath} (${problems.length} problems) and ${jsPath} (${withTests} with auto-tests)`,
    );
  }

  if (skipped.length > 0) {
    console.warn("\nSkipped folders:");
    skipped.forEach((item) => console.warn(`  - ${item}`));
  }
}

compile();
