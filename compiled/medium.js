#!/usr/bin/env node
/**
 * LeetCode Medium — practice file
 *
 * Run all tests:  node compiled/medium.js
 * Run one problem: node compiled/medium.js 1-two-sum
 *                  node compiled/medium.js twoSum
 */

// Shared helpers for linked-list problems
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


// --- Solutions ---
// 2-add-two-numbers (addTwoNumbers)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
globalThis.addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;
    
    while (l1 || l2 || carry) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        
        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        
        current.next = new ListNode(sum % 10);
        current = current.next;
        
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    
    return dummy.next;
};

// 49-group-anagrams (groupAnagrams)
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
globalThis.groupAnagrams = function(strs) {
    const map = {};

    for (const str of strs) {
        const key = str.split('').sort().join('');

        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(str);
    }

    return Object.values(map);
};

// 636-exclusive-time-of-functions (exclusiveTime)
/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
globalThis.exclusiveTime = function(n, logs) {
    const result = new Array(n).fill(0);
    const stack = [];

    let prevTime = 0;

    for (const log of logs) {
        const [idStr, type, timeStr] = log.split(":");

        const id = Number(idStr);
        const time = Number(timeStr);

        if (type === "start") {
            if (stack.length) {
                result[stack[stack.length - 1]] += time - prevTime;
            }

            stack.push(id);
            prevTime = time;
        } else {
            result[stack[stack.length - 1]] += time - prevTime + 1;

            stack.pop();
            prevTime = time + 1;
        }
    }

    return result;
};

// 686-repeated-string-match (repeatedStringMatch)
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
globalThis.repeatedStringMatch = function(a, b) {
    let times = Math.ceil(b.length / a.length);
    let repeated = a.repeat(times);

    if (repeated.includes(b)) return times;
    if ((repeated + a).includes(b)) return times + 1;
    return -1;
};

// 1460-number-of-substrings-containing-all-three-characters (numberOfSubstrings)
/**
 * @param {string} s
 * @return {number}
 */
globalThis.numberOfSubstrings = function(s) {
    let left = 0;
    let ans = 0;
    const count = { a: 0, b: 0, c: 0 };
    for (let right = 0; right < s.length; right++) {
        count[s[right]]++;
        while (count.a > 0 && count.b > 0 && count.c > 0) {
            ans += s.length - right;
            count[s[left]]--;
            left++;
        }
    }
    return ans;
};

// 2914-find-the-safest-path-in-a-grid (maximumSafenessFactor)
/**
 * @param {number[][]} grid
 * @return {number}
 */
globalThis.maximumSafenessFactor = function(grid) {
    if (grid[0][0] || grid.at(-1).at(-1)) return 0;
    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const n = grid.length;
    const q = grid.reduce((grid, r, i) => (r.forEach((c, j) => c && grid.enqueue([i, j])), grid), new Queue());

    while (q.size()) {
        const [i, j] = q.dequeue();
        const d = grid[i][j];

        for (const [dx, dy] of dirs) {
            const x = i + dx;
            const y = j + dy;

            if (grid[x]?.[y] === 0) {
                grid[x][y] = d + 1;
                q.enqueue([x, y]);
            }
        }
    }

    const pq = new MaxPriorityQueue({ compare: ([grid], [b]) => b - grid });
    pq.enqueue([grid[0][0], 0, 0]);

    while (pq.size()) {
        const [sf, i, j] = pq.dequeue();

        if (i === n - 1 && j === n - 1) return sf - 1;

        for (const [dx, dy] of dirs) {
            const x = i + dx;
            const y = j + dy;

            if (grid[x]?.[y] > 0) {
                pq.enqueue([Math.min(sf, grid[x][y]), x, y]);
                grid[x][y] = -grid[x][y];
            }
        }
    }

    return grid[n - 1][n - 1] - 1;
};

// 3558-find-a-safe-walk-through-a-grid (findSafeWalk)
/**
 * @param {number[][]} grid
 * @param {number} health
 * @return {boolean}
 */
globalThis.findSafeWalk = function(grid, health) {
    const m = grid.length;
    const n = grid[0].length;

    const dist = Array.from({ length: m }, () => Array(n).fill(Infinity));

    const deque = [];
    let head = 0;

    dist[0][0] = grid[0][0];
    deque.push([0, 0]);

    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    while (head < deque.length) {
        const [x, y] = deque[head++];

        for (let k = 0; k < 4; k++) {
            const nx = x + dx[k];
            const ny = y + dy[k];

            if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;

            const newCost = dist[x][y] + grid[nx][ny];

            if (newCost < dist[nx][ny]) {
                dist[nx][ny] = newCost;

                if (grid[nx][ny] === 0) {
                    deque.splice(head, 0, [nx, ny]);
                } else {
                    deque.push([nx, ny]);
                }
            }
        }
    }

    return dist[m - 1][n - 1] < health;
};

// --- Test runner (auto-generated) ---
const PROBLEM_TESTS = [
  {
    "id": "2-add-two-numbers",
    "fn": "addTwoNumbers",
    "usesListNode": true,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            2,
            4,
            3
          ],
          [
            5,
            6,
            4
          ]
        ],
        "expected": [
          7,
          0,
          8
        ]
      },
      {
        "args": [
          [
            0
          ],
          [
            0
          ]
        ],
        "expected": [
          0
        ]
      },
      {
        "args": [
          [
            9,
            9,
            9,
            9,
            9,
            9,
            9
          ],
          [
            9,
            9,
            9,
            9
          ]
        ],
        "expected": [
          8,
          9,
          9,
          9,
          0,
          0,
          0,
          1
        ]
      }
    ]
  },
  {
    "id": "49-group-anagrams",
    "fn": "groupAnagrams",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "636-exclusive-time-of-functions",
    "fn": "exclusiveTime",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          2
        ],
        "expected": [
          3,
          4
        ]
      },
      {
        "args": [
          1
        ],
        "expected": [
          8
        ]
      },
      {
        "args": [
          2
        ],
        "expected": [
          7,
          1
        ]
      }
    ]
  },
  {
    "id": "686-repeated-string-match",
    "fn": "repeatedStringMatch",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "1460-number-of-substrings-containing-all-three-characters",
    "fn": "numberOfSubstrings",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "2914-find-the-safest-path-in-a-grid",
    "fn": "maximumSafenessFactor",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            [
              1,
              0,
              0
            ],
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              1
            ]
          ]
        ],
        "expected": 0
      },
      {
        "args": [
          [
            [
              0,
              0,
              1
            ],
            [
              0,
              0,
              0
            ],
            [
              0,
              0,
              0
            ]
          ]
        ],
        "expected": 2
      },
      {
        "args": [
          [
            [
              0,
              0,
              0,
              1
            ],
            [
              0,
              0,
              0,
              0
            ],
            [
              0,
              0,
              0,
              0
            ],
            [
              1,
              0,
              0,
              0
            ]
          ]
        ],
        "expected": 2
      }
    ]
  },
  {
    "id": "3558-find-a-safe-walk-through-a-grid",
    "fn": "findSafeWalk",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  }
];

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
