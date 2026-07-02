#!/usr/bin/env node
/**
 * LeetCode Easy — practice file
 *
 * Run all tests:  node compiled/easy.js
 * Run one problem: node compiled/easy.js 1-two-sum
 *                  node compiled/easy.js twoSum
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
// 1-two-sum (twoSum)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
globalThis.twoSum = function(nums, target) {
    const seen = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (typeof(seen[diff]) == 'number') {
            return [seen[diff], i];
        } else {
            seen[nums[i]] = i;
        }
    }
};

// 9-palindrome-number (isPalindrome)
/**
 * @param {number} x
 * @return {boolean}
 */
globalThis.isPalindrome = function(x) {
     x = x.toString()
    let left = 0
    let right = x.length - 1

    while (left < right) {
        if (x[left] !== x[right]) {
            return false
        }
        left++
        right--
    }
    return true
};

// 13-roman-to-integer (romanToInt)
/**
 * @param {string} s
 * @return {number}
 */
globalThis.romanToInt = function(s) {
        const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const currentVal = romanMap[s[i]];
        const nextVal = romanMap[s[i + 1]];

        if (nextVal && currentVal < nextVal) {
            total -= currentVal;
        } else {
            total += currentVal;
        }
    }

    return total;
};

// 14-longest-common-prefix (longestCommonPrefix)
/**
 * @param {string[]} strs
 * @return {string}
 */
globalThis.longestCommonPrefix = function(strs) {
    if(!strs.length) return ""
    let prefix = strs[0];
    for(let i=1;i<strs.length;i++){
        while(strs[i].indexOf(prefix)!== 0){
            prefix = prefix.slice(0,-1);
            if(!prefix) return "";
        }
    }
    return prefix;
};

// 20-valid-parentheses (isValid)
/**
 * @param {string} s
 * @return {boolean}
 */
globalThis.isValid = function(s) {
    const stack = [];
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (pairs[char]) {
            stack.push(char);
        } else {
            const lastOpen = stack.pop();
            if (pairs[lastOpen] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

// 21-merge-two-sorted-lists (mergeTwoLists)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
globalThis.mergeTwoLists = function(list1, list2) {
    let dummyNode = new ListNode(-1);
    let temp = dummyNode;

    let curr1 = list1, curr2 = list2;

    while (curr1 !== null && curr2 !== null) {
        if (curr1.val < curr2.val) {
            temp.next = curr1;
            curr1 = curr1.next;
        } else {
            temp.next = curr2;
            curr2 = curr2.next;
        }
        temp = temp.next;
    }

    // Attach the remaining nodes
    temp.next = curr1 !== null ? curr1 : curr2;

    return dummyNode.next;
};

// 26-remove-duplicates-from-sorted-array (removeDuplicates)
/**
 * @param {number[]} nums
 * @return {number}
 */
globalThis.removeDuplicates = function(nums) {
    let removeZero = 1;
    let duplicate = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== duplicate) {
            duplicate = nums[i];
            nums[removeZero] = nums[i];
            removeZero++
        }
        
    }
    const length = nums.length;
    while (removeZero < length) {
        nums.pop();
        removeZero++;
    }
    return nums.length
};

// 27-remove-element (removeElement)
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
globalThis.removeElement = function(nums, val) {
    let k = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=val){
            nums[k] = nums[i]
            k++;
        }
    }
    return k
};

// 28-find-the-index-of-the-first-occurrence-in-a-string (strStr)
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
globalThis.strStr = function(haystack, needle) {
    if (needle.length > haystack.length) return -1;
    return haystack.indexOf(needle)
};

// 35-search-insert-position (searchInsert)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
globalThis.searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;  
};

// 58-length-of-last-word (lengthOfLastWord)
/**
 * @param {string} s
 * @return {number}
 */
globalThis.lengthOfLastWord = function(s) {
    s = s.trim().split(' ');
    return s[s.length-1].length
};

// 66-plus-one (plusOne)
/**
 * @param {number[]} digits
 * @return {number[]}
 */
globalThis.plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    
    digits.unshift(1);
    return digits;
};

// 67-add-binary (addBinary)
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
globalThis.addBinary = function(a, b) {
    const aBin = `0b${a}`
    const bBin = `0b${b}`
    const sum = BigInt(aBin) + BigInt(bBin)
    return sum.toString(2)
};

// var addBinary = function (a, b) {
//     let i = a.length - 1, j = b.length - 1;
//     let carry = 0;
//     const result = [];
//     while (i >= 0 || j >= 0 || carry) {
//         let total = carry;
//         if (i >= 0) {
//             console.log('a', a[i]);
//             total += parseInt(a[i])
//             i--
//         }
//         if (j >= 0) {
//             console.log('b', b[j]);
//             total += parseInt(b[j])
//             j--
//         }
//         result.unshift(total % 2);
//         carry = Math.floor(total / 2);
//     }
//     return result
// };

// 69-sqrtx (mySqrt)
/**
 * @param {number} x
 * @return {number}
 */
globalThis.mySqrt = function(x) {
    if (x < 2) return x;

    let low = 1;
    let high = Math.floor(x / 2); 
    let ans = 0;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        let square = mid * mid;

        if (square === x) {
            return mid;
        } else if (square < x) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return ans;
};

// 70-climbing-stairs (climbStairs)
/**
 * @param {number} n
 * @return {number}
 */
globalThis.climbStairs = function(n) {
    if(n<=2) return n
    let first = 1, second = 2;
    for(let i = 3;i<=n;i++){
        let third = first + second;
        first = second;
        second = third;
    }
    return second;
};

// 136-single-number (singleNumber)
/**
 * @param {number[]} nums
 * @return {number}
 */
globalThis.singleNumber = function(nums) {
    let res = 0;

    for (let n of nums) {
        res ^= n;
    }

    return res;  
};

// 169-majority-element (majorityElement)
/**
 * @param {number[]} nums
 * @return {number}
 */
globalThis.majorityElement = function(nums) {
    let majority = 0;
    let votes = 0;

    for (const num of nums) {
        if (votes == 0) {
            votes+=1;
            majority = num;
        } else if (majority == num) {
            votes+=1
        } else {
            votes-=1
        }
    }
    return majority
};

// 217-contains-duplicate (containsDuplicate)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
globalThis.containsDuplicate = function(nums) {
        const seen = {};
    for (const num of nums) {
        if (seen[num]) {
            return true;
        } else {
            seen[num] = 1;
        }
    }
    return false;
};

// 219-contains-duplicate-ii — no solution file
// Add your solution here

// 344-reverse-string (reverseString)
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
globalThis.reverseString = function(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
};

// 392-is-subsequence (isSubsequence)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
globalThis.isSubsequence = function(s, t) {
    let sCount = 0;
    
    for (const _t of t) {
        if (s[sCount] == _t) {
            sCount++;
        }
    }
    return sCount == s.length
};

// 459-repeated-substring-pattern (repeatedSubstringPattern)
/**
 * @param {string} s
 * @return {boolean}
 */
globalThis.repeatedSubstringPattern = function(s) {
    let n = s.length;

    for (let len = 1; len <= n / 2; len++) {
        if (n % len === 0) {
            let pattern = s.substring(0, len);
            let temp = pattern.repeat(n / len);

            if (temp === s) return true;
        }
    }

    return false;
};

// 1603-running-sum-of-1d-array (runningSum)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
globalThis.runningSum = function(nums) {
    for (let i = 1; i < nums.length; i++){
        nums[i] = nums[i] + nums[i-1]
    }
    return nums
};

// 1960-check-if-the-sentence-is-pangram (checkIfPangram)
/**
 * @param {string} sentence
 * @return {boolean}
 */
globalThis.checkIfPangram = function(sentence) {
    if(sentence.length < 26) return false

    const aplhabetSet = new Set(sentence)
    return aplhabetSet.size == 26 ? true: false
};

// 2099-number-of-strings-that-appear-as-substrings-in-word (numOfStrings)
/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
globalThis.numOfStrings = function(patterns, word) {
    let count = 0;
    for(const pattern of patterns){
        if(word.indexOf(pattern)>-1){
            count++
        }
    }
    return count;
};

// 3236-smallest-missing-integer-greater-than-sequential-prefix-sum (missingInteger)
/**
 * @param {number[]} nums
 * @return {number}
 */
globalThis.missingInteger = function(nums) {
    let longestPrefixSum = nums[0];
    for (let i = 1; i < nums.length; i++){
        if (nums[i] == nums[i - 1] + 1) {
            longestPrefixSum += nums[i];
        } else {
            break;
        }
    }

    const set = new Set(nums)
    while (set.has(longestPrefixSum)) {
        longestPrefixSum++;
    }
    return longestPrefixSum
};

// --- Test runner (auto-generated) ---
const PROBLEM_TESTS = [
  {
    "id": "1-two-sum",
    "fn": "twoSum",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            2,
            7,
            11,
            15
          ],
          9
        ],
        "expected": [
          0,
          1
        ]
      },
      {
        "args": [
          [
            3,
            2,
            4
          ],
          6
        ],
        "expected": [
          1,
          2
        ]
      },
      {
        "args": [
          [
            3,
            3
          ],
          6
        ],
        "expected": [
          0,
          1
        ]
      }
    ]
  },
  {
    "id": "9-palindrome-number",
    "fn": "isPalindrome",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          121
        ],
        "expected": true
      },
      {
        "args": [
          -121
        ],
        "expected": false
      },
      {
        "args": [
          10
        ],
        "expected": false
      }
    ]
  },
  {
    "id": "13-roman-to-integer",
    "fn": "romanToInt",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "14-longest-common-prefix",
    "fn": "longestCommonPrefix",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "20-valid-parentheses",
    "fn": "isValid",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "21-merge-two-sorted-lists",
    "fn": "mergeTwoLists",
    "usesListNode": true,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            1,
            2,
            4
          ],
          [
            1,
            3,
            4
          ]
        ],
        "expected": [
          1,
          1,
          2,
          3,
          4,
          4
        ]
      },
      {
        "args": [
          [],
          []
        ],
        "expected": []
      },
      {
        "args": [
          [],
          [
            0
          ]
        ],
        "expected": [
          0
        ]
      }
    ]
  },
  {
    "id": "26-remove-duplicates-from-sorted-array",
    "fn": "removeDuplicates",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            1,
            1,
            2
          ]
        ],
        "expected": 2
      },
      {
        "args": [
          [
            0,
            0,
            1,
            1,
            1,
            2,
            2,
            3,
            3,
            4
          ]
        ],
        "expected": 5
      }
    ]
  },
  {
    "id": "27-remove-element",
    "fn": "removeElement",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            3,
            2,
            2,
            3
          ],
          3
        ],
        "expected": 2
      },
      {
        "args": [
          [
            0,
            1,
            2,
            2,
            3,
            0,
            4,
            2
          ],
          2
        ],
        "expected": 5
      }
    ]
  },
  {
    "id": "28-find-the-index-of-the-first-occurrence-in-a-string",
    "fn": "strStr",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "35-search-insert-position",
    "fn": "searchInsert",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            1,
            3,
            5,
            6
          ],
          5
        ],
        "expected": 2
      },
      {
        "args": [
          [
            1,
            3,
            5,
            6
          ],
          2
        ],
        "expected": 1
      },
      {
        "args": [
          [
            1,
            3,
            5,
            6
          ],
          7
        ],
        "expected": 4
      }
    ]
  },
  {
    "id": "58-length-of-last-word",
    "fn": "lengthOfLastWord",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "66-plus-one",
    "fn": "plusOne",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            1,
            2,
            3
          ]
        ],
        "expected": [
          1,
          2,
          4
        ]
      },
      {
        "args": [
          [
            4,
            3,
            2,
            1
          ]
        ],
        "expected": [
          4,
          3,
          2,
          2
        ]
      },
      {
        "args": [
          [
            9
          ]
        ],
        "expected": [
          1,
          0
        ]
      }
    ]
  },
  {
    "id": "67-add-binary",
    "fn": "addBinary",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          "11",
          "1"
        ],
        "expected": "100"
      },
      {
        "args": [
          "1010",
          "1011"
        ],
        "expected": "10101"
      }
    ]
  },
  {
    "id": "69-sqrtx",
    "fn": "mySqrt",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          4
        ],
        "expected": 2
      },
      {
        "args": [
          8
        ],
        "expected": 2
      }
    ]
  },
  {
    "id": "70-climbing-stairs",
    "fn": "climbStairs",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          2
        ],
        "expected": 2
      },
      {
        "args": [
          3
        ],
        "expected": 3
      }
    ]
  },
  {
    "id": "136-single-number",
    "fn": "singleNumber",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "169-majority-element",
    "fn": "majorityElement",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            3,
            2,
            3
          ]
        ],
        "expected": 3
      },
      {
        "args": [
          [
            2,
            2,
            1,
            1,
            1,
            2,
            2
          ]
        ],
        "expected": 2
      }
    ]
  },
  {
    "id": "217-contains-duplicate",
    "fn": "containsDuplicate",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "219-contains-duplicate-ii",
    "fn": null,
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "344-reverse-string",
    "fn": "reverseString",
    "usesListNode": false,
    "mutatesInput": true,
    "cases": [
      {
        "args": [
          [
            "h",
            "e",
            "l",
            "l",
            "o"
          ]
        ],
        "expected": [
          "o",
          "l",
          "l",
          "e",
          "h"
        ]
      },
      {
        "args": [
          [
            "H",
            "a",
            "n",
            "n",
            "a",
            "h"
          ]
        ],
        "expected": [
          "h",
          "a",
          "n",
          "n",
          "a",
          "H"
        ]
      }
    ]
  },
  {
    "id": "392-is-subsequence",
    "fn": "isSubsequence",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          "abc",
          "ahbgdc"
        ],
        "expected": true
      },
      {
        "args": [
          "axc",
          "ahbgdc"
        ],
        "expected": false
      }
    ]
  },
  {
    "id": "459-repeated-substring-pattern",
    "fn": "repeatedSubstringPattern",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "1603-running-sum-of-1d-array",
    "fn": "runningSum",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            1,
            2,
            3,
            4
          ]
        ],
        "expected": [
          1,
          3,
          6,
          10
        ]
      },
      {
        "args": [
          [
            1,
            1,
            1,
            1,
            1
          ]
        ],
        "expected": [
          1,
          2,
          3,
          4,
          5
        ]
      },
      {
        "args": [
          [
            3,
            1,
            2,
            10,
            1
          ]
        ],
        "expected": [
          3,
          4,
          6,
          16,
          17
        ]
      }
    ]
  },
  {
    "id": "1960-check-if-the-sentence-is-pangram",
    "fn": "checkIfPangram",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "2099-number-of-strings-that-appear-as-substrings-in-word",
    "fn": "numOfStrings",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": []
  },
  {
    "id": "3236-smallest-missing-integer-greater-than-sequential-prefix-sum",
    "fn": "missingInteger",
    "usesListNode": false,
    "mutatesInput": false,
    "cases": [
      {
        "args": [
          [
            1,
            2,
            3,
            2,
            5
          ]
        ],
        "expected": 6
      },
      {
        "args": [
          [
            3,
            4,
            5,
            1,
            12,
            14,
            13
          ]
        ],
        "expected": 15
      }
    ]
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
