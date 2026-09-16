#!/usr/bin/env node
/**
 * Generate practice copies of your LeetCode solutions.
 *
 * Usage:
 *   node generate-practice.js               # uses current directory
 *   node generate-practice.js /path/to/leetcode
 *
 * What it does:
 *   - Scans sibling folders that look like problems (e.g. "14-longest-common-prefix")
 *   - Reads difficulty from README.md badge (Easy | Medium | Hard)
 *   - Creates practice/{easy,medium,hard}/<folder>/<file>.js
 *   - Empties every function body (keeps signature + JSDoc), preserves ALL test cases
 *   - For Tree / Linked List problems, prepends TreeNode/ListNode classes + array
 *     builders so the file still runs locally with `node file.js`
 */

const fs = require("fs");
const path = require("path");

const SOURCE = path.resolve(process.argv[2] || process.cwd());
const OUT_ROOT = path.join(SOURCE, "practice");
const DIFFS = ["easy", "medium", "hard"];

// ------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function parseDifficulty(readmePath) {
  if (!fs.existsSync(readmePath)) return null;
  const text = fs.readFileSync(readmePath, "utf8");
  const m = text.match(/Difficulty-(Easy|Medium|Hard)/i);
  return m ? m[1].toLowerCase() : null;
}

function isProblemFolder(name) {
  return /^\d+-/.test(name);
}

// ------------------------------------------------------------------
// Strip every `function (...) { ... }` body while preserving
// signatures, JSDoc, and everything else (test cases stay untouched).
// Handles multiple functions in one file (e.g. constructor + prototype
// methods for Design-style problems).
// ------------------------------------------------------------------

function stripFunctionBodies(src) {
  let out = "";
  let i = 0;
  const n = src.length;

  while (i < n) {
    const fnIdx = src.indexOf("function", i);
    if (fnIdx === -1) {
      out += src.slice(i);
      break;
    }
    // Word-boundary check on both sides
    const prevCh = fnIdx === 0 ? " " : src[fnIdx - 1];
    const nextCh = src[fnIdx + 8] || " ";
    if (/[A-Za-z0-9_$]/.test(prevCh) || /[A-Za-z0-9_$]/.test(nextCh)) {
      out += src.slice(i, fnIdx + 8);
      i = fnIdx + 8;
      continue;
    }

    // Find `(` after `function`
    const openParen = src.indexOf("(", fnIdx + 8);
    if (openParen === -1) {
      out += src.slice(i);
      break;
    }

    // Match the `)` (params should not contain nested parens for typical solutions,
    // but handle it anyway)
    let depth = 1,
      p = openParen + 1;
    while (p < n && depth > 0) {
      if (src[p] === "(") depth++;
      else if (src[p] === ")") depth--;
      p++;
    }
    // Find `{` after `)`
    const openBrace = src.indexOf("{", p);
    if (openBrace === -1) {
      out += src.slice(i);
      break;
    }

    // Walk to matching `}` — skip strings, template literals, and comments
    depth = 1;
    let r = openBrace + 1;
    while (r < n && depth > 0) {
      const ch = src[r];
      const nx = src[r + 1];
      if (ch === "/" && nx === "/") {
        r += 2;
        while (r < n && src[r] !== "\n") r++;
        continue;
      }
      if (ch === "/" && nx === "*") {
        r += 2;
        while (r < n - 1 && !(src[r] === "*" && src[r + 1] === "/")) r++;
        r += 2;
        continue;
      }
      if (ch === '"' || ch === "'" || ch === "`") {
        const quote = ch;
        r++;
        while (r < n && src[r] !== quote) {
          if (src[r] === "\\") r++; // skip escaped char
          if (quote === "`" && src[r] === "$" && src[r + 1] === "{") {
            // template expression — walk to matching `}`
            r += 2;
            let td = 1;
            while (r < n && td > 0) {
              if (src[r] === "{") td++;
              else if (src[r] === "}") td--;
              r++;
            }
            continue;
          }
          r++;
        }
        r++;
        continue;
      }
      if (ch === "{") depth++;
      else if (ch === "}") depth--;
      r++;
    }

    // Emit signature + placeholder body + closing brace
    out += src.slice(i, openBrace + 1) + "\n    // TODO: implement\n    \n}";
    i = r; // one past the original `}`
  }

  return out;
}

// ------------------------------------------------------------------
// TreeNode / ListNode helpers — prepended when detected
// ------------------------------------------------------------------

const TREE_HELPERS = `// ---- TreeNode helpers (auto-added so this file runs locally) ----
function TreeNode(val, left, right) {
    this.val   = (val   === undefined ? 0    : val);
    this.left  = (left  === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// Build a tree from a LeetCode-style level-order array, e.g. [1,null,2,3]
function arrayToTree(arr) {
    if (!arr || !arr.length || arr[0] === null || arr[0] === undefined) return null;
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
    while (queue.length && i < arr.length) {
        const node = queue.shift();
        if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;
        if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }
    return root;
}

// Serialize a tree back into a level-order array (nulls trimmed from the tail)
function treeToArray(root) {
    if (!root) return [];
    const out = [];
    const queue = [root];
    while (queue.length) {
        const node = queue.shift();
        if (node === null) { out.push(null); continue; }
        out.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
    }
    while (out.length && out[out.length - 1] === null) out.pop();
    return out;
}
// -----------------------------------------------------------------
`;

const LIST_HELPERS = `// ---- ListNode helpers (auto-added so this file runs locally) ----
function ListNode(val, next) {
    this.val  = (val  === undefined ? 0    : val);
    this.next = (next === undefined ? null : next);
}

function arrayToList(arr) {
    const dummy = new ListNode(0);
    let cur = dummy;
    for (const v of (arr || [])) {
        cur.next = new ListNode(v);
        cur = cur.next;
    }
    return dummy.next;
}

function listToArray(head) {
    const out = [];
    while (head) { out.push(head.val); head = head.next; }
    return out;
}
// -----------------------------------------------------------------
`;

function needsHelpers(src) {
  return {
    usesTree: /\bTreeNode\b/.test(src),
    usesList: /\bListNode\b/.test(src),
  };
}

// ------------------------------------------------------------------
// Per-file processing
// ------------------------------------------------------------------

function processFile(srcPath) {
  const src = fs.readFileSync(srcPath, "utf8");
  const { usesTree, usesList } = needsHelpers(src);

  let preamble = "";
  if (usesTree) preamble += TREE_HELPERS + "\n";
  if (usesList) preamble += LIST_HELPERS + "\n";

  return preamble + stripFunctionBodies(src);
}

// ------------------------------------------------------------------
// Main
// ------------------------------------------------------------------

function main() {
  if (!fs.existsSync(SOURCE) || !fs.statSync(SOURCE).isDirectory()) {
    console.error(`Source directory does not exist: ${SOURCE}`);
    process.exit(1);
  }

  DIFFS.forEach((d) => ensureDir(path.join(OUT_ROOT, d)));

  const entries = fs.readdirSync(SOURCE, { withFileTypes: true });
  let ok = 0,
    skipped = 0;

  for (const ent of entries) {
    if (!ent.isDirectory()) continue;
    if (ent.name === "practice") continue;
    if (!isProblemFolder(ent.name)) continue;

    const folder = path.join(SOURCE, ent.name);
    const readmePath = path.join(folder, "README.md");
    const difficulty = parseDifficulty(readmePath);

    if (!difficulty) {
      console.warn(`skip  ${ent.name}  (no Difficulty badge in README.md)`);
      skipped++;
      continue;
    }

    const jsFiles = fs.readdirSync(folder).filter((f) => f.endsWith(".js"));
    if (!jsFiles.length) {
      console.warn(`skip  ${ent.name}  (no .js file)`);
      skipped++;
      continue;
    }

    const destFolder = path.join(OUT_ROOT, difficulty, ent.name);
    ensureDir(destFolder);

    for (const jsFile of jsFiles) {
      const contents = processFile(path.join(folder, jsFile));
      fs.writeFileSync(path.join(destFolder, jsFile), contents, "utf8");
    }

    // Also copy the README so you can read the prompt while practicing
    if (fs.existsSync(readmePath)) {
      fs.copyFileSync(readmePath, path.join(destFolder, "README.md"));
    }

    console.log(`ok    ${difficulty.padEnd(6)} ${ent.name}`);
    ok++;
  }

  console.log(`\nDone. ${ok} folder(s) processed, ${skipped} skipped.`);
  console.log(`Output: ${OUT_ROOT}`);
}

main();
