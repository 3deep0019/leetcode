#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const OUTPUT_DIR = path.join(ROOT, "compiled");

const DIFFICULTIES = ["Easy", "Medium", "Hard"];

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

function buildProblemSection(folderName, readme, solution, notes) {
  const sections = [
    `## ${folderName}`,
    "",
    "### Problem",
    "",
    readme.trim(),
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

function compile() {
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

    grouped[difficulty].push(
      buildProblemSection(folderName, readme, solution, notes)
    );
  }

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }

  for (const difficulty of DIFFICULTIES) {
    const problems = grouped[difficulty];
    const header = `# LeetCode ${difficulty} Problems\n\n${problems.length} problem(s)\n\n`;
    const outputPath = path.join(OUTPUT_DIR, `${difficulty.toLowerCase()}.md`);

    fs.writeFileSync(outputPath, header + problems.join("\n"), "utf8");
    console.log(`Wrote ${outputPath} (${problems.length} problems)`);
  }

  if (skipped.length > 0) {
    console.warn("\nSkipped folders:");
    skipped.forEach((item) => console.warn(`  - ${item}`));
  }
}

compile();
