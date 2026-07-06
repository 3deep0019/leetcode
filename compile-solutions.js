#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const OUTPUT_DIR = path.join(ROOT, "compiled");

const DIFFICULTIES = ["Easy", "Medium", "Hard"];

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

function getProblemNumber(folderName) {
  const match = folderName.match(/^(\d+)-/);
  return match ? parseInt(match[1], 10) : Number.MAX_SAFE_INTEGER;
}

function parseDifficulty(readme) {
  const match = readme.match(/Difficulty-(Easy|Medium|Hard)/i);
  return match ? match[1][0].toUpperCase() + match[1].slice(1).toLowerCase() : null;
}

function findSolutionFile(dir) {
  const jsFiles = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".js"))
    .sort();

  return jsFiles.length > 0 ? path.join(dir, jsFiles[0]) : null;
}

function readFileIfExists(filePath) {
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf8") : null;
}

function getProblemFolders() {
  return fs
    .readdirSync(ROOT, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() &&
        !entry.name.startsWith(".") &&
        entry.name !== "compiled" &&
        entry.name !== "node_modules" &&
        /^\d+-/.test(entry.name)
    )
    .map((entry) => entry.name)
    .sort((a, b) => getProblemNumber(a) - getProblemNumber(b));
}

function extractFunctionName(solution) {
  const varMatch = solution.match(/(?:var|const|let)\s+(\w+)\s*=/);
  if (varMatch) return varMatch[1];

  const fnMatch = solution.match(/function\s+(\w+)\s*\(/);
  return fnMatch ? fnMatch[1] : null;
}

function usesListNode(solution, readme) {
  return /ListNode/.test(solution) || /\bl[12]\s*=/i.test(readme) || /\blist[12]\s*=/i.test(readme);
}

function mutatesInput(solution) {
  return /@return\s+\{void\}/i.test(solution);
}

function readValue(str, pos) {
  while (pos < str.length && /\s/.test(str[pos])) pos++;

  const quote = str[pos];
  if (quote === '"' || quote === "'") {
    let i = pos + 1;
    let value = "";
    while (i < str.length) {
      if (str[i] === "\\") {
        value += str[i + 1];
        i += 2;
        continue;
      }
      if (str[i] === quote) return { value, end: i + 1 };
      value += str[i++];
    }
    return null;
  }

  if (str[pos] === "[") {
    let depth = 0;
    for (let i = pos; i < str.length; i++) {
      if (str[i] === "[") depth++;
      if (str[i] === "]") {
        depth--;
        if (depth === 0) {
          const raw = str.slice(pos, i + 1);
          try {
            return { value: JSON.parse(raw.replace(/'/g, '"')), end: i + 1 };
          } catch {
            return null;
          }
        }
      }
    }
    return null;
  }

  const literalMatch = str.slice(pos).match(/^(-?\d+|true|false)/);
  if (literalMatch) {
    const token = literalMatch[1];
    const value =
      token === "true" ? true : token === "false" ? false : Number(token);
    return { value, end: pos + token.length };
  }

  return null;
}

function parseAssignments(inputStr) {
  const clean = inputStr.replace(/<[^>]+>/g, "");
  const args = [];
  let pos = 0;

  while (pos < clean.length) {
    const nameMatch = clean.slice(pos).match(/^\s*(\w+)\s*=\s*/);
    if (!nameMatch) break;

    pos += nameMatch[0].length;
    const parsed = readValue(clean, pos);
    if (!parsed) break;

    args.push(parsed.value);
    pos = parsed.end;

    while (pos < clean.length && /\s/.test(clean[pos])) pos++;
    if (clean[pos] === ",") pos++;
  }

  return args;
}

function parseExamples(readme) {
  const examples = [];
  const preRegex = /<pre>([\s\S]*?)<\/pre>/g;
  let match;

  while ((match = preRegex.exec(readme)) !== null) {
    const block = match[1];
    const inputMatch = block.match(
      /<strong>Input:<\/strong>\s*([\s\S]*?)(?:\n|<strong>Output:)/
    );
    const outputMatch = block.match(
      /<strong>Output:<\/strong>\s*([\s\S]*?)(?:\n|<strong>Explanation:)/
    );

    if (!inputMatch || !outputMatch) continue;

    const args = parseAssignments(inputMatch[1]);
    const expectedParsed = readValue(
      outputMatch[1].replace(/<[^>]+>/g, "").trim(),
      0
    );

    if (args.length > 0 && expectedParsed) {
      examples.push({ args, expected: expectedParsed.value });
    }
  }

  return examples;
}

function decodeHtmlEntities(text) {
  return text
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&hellip;/g, "...");
}

function stripAllTags(html) {
  return html.replace(/<[^>]+>/g, "");
}

function cleanInlineHtml(html) {
  let text = html;
  text = text.replace(/<code>([\s\S]*?)<\/code>/gi, (_, content) => {
    const inner = content.replace(
      /<sup>([\s\S]*?)<\/sup>/gi,
      (_, sup) => "^" + stripAllTags(sup)
    );
    return "`" + stripAllTags(inner) + "`";
  });
  text = text.replace(/<sup>([\s\S]*?)<\/sup>/gi, (_, content) => "^" + stripAllTags(content));
  text = text.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, (_, content) => stripAllTags(content));
  text = text.replace(/<em>([\s\S]*?)<\/em>/gi, (_, content) => stripAllTags(content));
  text = text.replace(/<span[^>]*>([\s\S]*?)<\/span>/gi, "$1");
  text = text.replace(/<a[^>]*>([\s\S]*?)<\/a>/gi, "$1");
  text = text.replace(/<p[^>]*>/gi, "\n");
  text = text.replace(/<\/p>/gi, "\n");
  text = text.replace(/<br\s*\/?>/gi, "\n");
  text = text.replace(/<font[^>]*>([\s\S]*?)<\/font>/gi, "$1");
  text = text.replace(/<[^>]+>/g, "");
  return text;
}

function normalizeWhitespace(text) {
  return text
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function htmlToPlainText(html) {
  let text = html.replace(/\r\n/g, "\n");

  text = text.replace(/<img[^>]*\/?>/gi, "");
  text = text.replace(/<hr\s*\/?>/gi, "\n");

  text = text.replace(
    /<h2>\s*<a[^>]*href="([^"]*)"[^>]*>([^<]*)<\/a>\s*<\/h2>/gi,
    (_, url, title) => `\n${title}\n${url}\n`
  );

  const preBlocks = [];
  text = text.replace(/<pre>([\s\S]*?)<\/pre>/gi, (_, content) => {
    preBlocks.push(cleanInlineHtml(content).trim());
    return `\n__PRE_${preBlocks.length - 1}__\n`;
  });

  text = text.replace(/<li>\s*([\s\S]*?)\s*<\/li>/gi, (_, content) => {
    return `- ${cleanInlineHtml(content).trim()}\n`;
  });
  text = text.replace(/<\/?[uo]l>/gi, "\n");

  text = cleanInlineHtml(text);
  text = text.replace(/__PRE_(\d+)__/g, (_, index) => `\n${preBlocks[Number(index)]}\n`);

  return normalizeWhitespace(decodeHtmlEntities(text));
}

function buildProblemSection(folderName, readme, solution, notes) {
  const sections = [
    `## ${folderName}`,
    "",
    "### Problem",
    "",
    htmlToPlainText(readme),
    "",
  ];

  if (solution) {
    sections.push("### Solution", "", "```javascript", solution.trim(), "```", "");
  } else {
    sections.push("### Solution", "", "_No solution file found._", "");
  }

  if (notes) {
    sections.push("### Notes", "", notes.trim(), "");
  }

  sections.push("---", "");
  return sections.join("\n");
}

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

function extractSignatureStub(solution, functionName) {
  if (!solution || !functionName) return null;

  const jsdocs = solution.match(/\/\*\*[\s\S]*?\*\//g) || [];
  const fnPattern = new RegExp(
    `(?:var|const|let)\\s+${functionName}\\s*=\\s*function\\s*\\([^)]*\\)\\s*\\{`,
    "m"
  );
  const fnMatch = solution.match(fnPattern);

  if (!fnMatch) return null;

  const signature =
    fnMatch[0].replace(/^(?:var|const|let)\s+/, "globalThis.") +
    "\n  // Write your solution here\n};";

  return [...jsdocs, signature].join("\n\n");
}

function readmeToComment(readme, folderName) {
  const plain = htmlToPlainText(readme);
  const lines = plain.split("\n").map((line) => " * " + line.replace(/\*\//g, "* /"));
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
      "// };"
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
    JSON.stringify(tests, null, 2)
  );

  return header + body + "\n" + runner + "\n";
}

function collectProblems() {
  const grouped = Object.fromEntries(DIFFICULTIES.map((d) => [d, []]));
  const skipped = [];

  for (const folderName of getProblemFolders()) {
    const dir = path.join(ROOT, folderName);
    const readme = readFileIfExists(path.join(dir, "README.md"));

    if (!readme) {
      skipped.push(`${folderName} (missing README.md)`);
      continue;
    }

    const difficulty = parseDifficulty(readme);
    if (!difficulty || !grouped[difficulty]) {
      skipped.push(`${folderName} (unknown difficulty)`);
      continue;
    }

    const solutionPath = findSolutionFile(dir);
    const solution = solutionPath ? readFileIfExists(solutionPath) : null;
    const notes = readFileIfExists(path.join(dir, "Notes.md"));
    const functionName = solution ? extractFunctionName(solution) : null;

    grouped[difficulty].push({
      folderName,
      readme,
      solution,
      notes,
      functionName,
      signatureStub: solution ? extractSignatureStub(solution, functionName) : null,
      usesListNode: solution ? usesListNode(solution, readme) : usesListNode("", readme),
      mutatesInput: solution ? mutatesInput(solution) : false,
      examples: functionName ? parseExamples(readme) : [],
      markdown: buildProblemSection(folderName, readme, solution, notes),
    });
  }

  return { grouped, skipped };
}

function compile() {
  const { grouped, skipped } = collectProblems();

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }

  for (const difficulty of DIFFICULTIES) {
    const problems = grouped[difficulty];
    const mdPath = path.join(OUTPUT_DIR, `${difficulty.toLowerCase()}.md`);
    const jsPath = path.join(OUTPUT_DIR, `${difficulty.toLowerCase()}.js`);

    const mdHeader = `# LeetCode ${difficulty} Problems\n\n${problems.length} problem(s)\n\n`;
    fs.writeFileSync(mdPath, mdHeader + problems.map((p) => p.markdown).join("\n"), "utf8");

    fs.writeFileSync(jsPath, buildJsFile(difficulty, problems), "utf8");
    fs.chmodSync(jsPath, 0o755);

    const withTests = problems.filter((p) => p.examples.length > 0).length;
    console.log(
      `Wrote ${mdPath} (${problems.length} problems) and ${jsPath} (${withTests} with auto-tests)`
    );
  }

  if (skipped.length > 0) {
    console.warn("\nSkipped folders:");
    skipped.forEach((item) => console.warn(`  - ${item}`));
  }
}

compile();
