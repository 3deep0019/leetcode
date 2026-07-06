const LIST_HELPERS = `
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

export const LIST_NODE_HELPERS = LIST_HELPERS.trim();

function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function normalizeGroupAnagrams(value) {
  return value
    .map((group) => [...group].sort())
    .sort((left, right) => left.join("").localeCompare(right.join("")));
}

function createRuntime(code) {
  const sandbox = {};
  const runner = new Function(
    "globalThis",
    `
    ${LIST_HELPERS}
    ${code}
    return {
      globalThis,
      arrayToList,
      listToArray,
    };
  `
  );
  return runner(sandbox);
}

export function runProblemTests(code, problem) {
  if (!problem.functionName) {
    return {
      ok: false,
      error: "This problem has no function signature yet. Add a solution file in the repo.",
      results: [],
    };
  }

  if (problem.cases.length === 0) {
    return {
      ok: false,
      error: "No test cases available for this problem.",
      results: [],
    };
  }

  let runtime;
  try {
    runtime = createRuntime(code);
  } catch (error) {
    return {
      ok: false,
      error: error.message,
      results: [],
    };
  }

  const fn = runtime.globalThis[problem.functionName];
  if (typeof fn !== "function") {
    return {
      ok: false,
      error: `Define your solution as globalThis.${problem.functionName} = function(...) { ... }`,
      results: [],
    };
  }

  const results = [];

  for (let i = 0; i < problem.cases.length; i++) {
    const testCase = problem.cases[i];
    const label = `Example ${i + 1}`;

    try {
      let args = JSON.parse(JSON.stringify(testCase.args));
      if (problem.usesListNode) {
        args = args.map((arg) => (Array.isArray(arg) ? runtime.arrayToList(arg) : arg));
      }

      let result = fn(...args);

      if (problem.mutatesInput) {
        result = args[0];
      } else if (problem.usesListNode && Array.isArray(testCase.expected)) {
        result = runtime.listToArray(result);
      }

      let passed = deepEqual(result, testCase.expected);
      if (!passed && problem.functionName === "groupAnagrams") {
        passed = deepEqual(
          normalizeGroupAnagrams(result),
          normalizeGroupAnagrams(testCase.expected)
        );
      }

      results.push({
        label,
        passed,
        input: testCase.args,
        expected: testCase.expected,
        actual: result,
      });
    } catch (error) {
      results.push({
        label,
        passed: false,
        input: testCase.args,
        expected: testCase.expected,
        error: error.message,
      });
    }
  }

  const passedCount = results.filter((r) => r.passed).length;
  return {
    ok: passedCount === results.length,
    error: null,
    results,
    summary: `${passedCount}/${results.length} test cases passed`,
  };
}

export function getStarterCode(problem) {
  const parts = [];

  if (problem.usesListNode) {
    parts.push(LIST_NODE_HELPERS);
  }

  if (problem.starterCode) {
    parts.push(problem.starterCode);
  } else if (problem.functionName) {
    parts.push(
      `globalThis.${problem.functionName} = function() {\n  // Write your solution here\n};`
    );
  } else {
    parts.push("// Write your solution here");
  }

  return parts.join("\n\n");
}
