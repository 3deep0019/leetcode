# LeetCode Hard Problems

4 problem(s)

## 220-contains-duplicate-iii

### Problem

Contains Duplicate III
https://leetcode.com/problems/contains-duplicate-iii

You are given an integer array `nums` and two integers `indexDiff` and `valueDiff`.

Find a pair of indices `(i, j)` such that:

	- `i != j`,

	- `abs(i - j) <= indexDiff`.

	- `abs(nums[i] - nums[j]) <= valueDiff`, and

Return `true` if such pair exists or `false` otherwise.

Example 1:

Input: nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
Output: true
Explanation: We can choose (i, j) = (0, 3).
We satisfy the three conditions:
i != j --> 0 != 3
abs(i - j) <= indexDiff --> abs(0 - 3) <= 3
abs(nums[i] - nums[j]) <= valueDiff --> abs(1 - 1) <= 0

Example 2:

Input: nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3
Output: false
Explanation: After trying all the possible pairs (i, j), we cannot satisfy the three conditions, so we return false.

Constraints:

	- `2 <= nums.length <= 10^5`

	- `-10^9 <= nums[i] <= 10^9`

	- `1 <= indexDiff <= nums.length`

	- `0 <= valueDiff <= 10^9`

### Solution

```javascript
/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
        if (indexDiff <= 0 || valueDiff < 0) return false;
    const buckets = new Map();
    const width = valueDiff + 1; 
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        
        const bucketId = Math.floor(num / width);
        
        if (buckets.has(bucketId)) {
            return true;
        }
        
        if (buckets.has(bucketId - 1) && Math.abs(num - buckets.get(bucketId - 1)) <= valueDiff) {
            return true;
        }
        
        if (buckets.has(bucketId + 1) && Math.abs(num - buckets.get(bucketId + 1)) <= valueDiff) {
            return true;
        }
        
        buckets.set(bucketId, num);
        
        if (i >= indexDiff) {
            const oldBucketId = Math.floor(nums[i - indexDiff] / width);
            buckets.delete(oldBucketId);
        }
    }
    
    return false;
};
```

---

## 1234-number-of-paths-with-max-score

### Problem

Number of Paths with Max Score
https://leetcode.com/problems/number-of-paths-with-max-score

You are given a square `board` of characters. You can move on the board starting at the bottom right square marked with the character `'S'`.

You need to reach the top left square marked with the character `'E'`. The rest of the squares are labeled either with a numeric character `1, 2, ..., 9` or with an obstacle `'X'`. In one move you can go up, left or up-left (diagonally) only if there is no obstacle there.

Return a list of two integers: the first integer is the maximum sum of numeric characters you can collect, and the second is the number of such paths that you can take to get that maximum sum, taken modulo `10^9 + 7`.

In case there is no path, return `[0, 0]`.

Example 1:

Input: board = ["E23","2X2","12S"]
Output: [7,1]

Example 2:

Input: board = ["E12","1X1","21S"]
Output: [4,2]

Example 3:

Input: board = ["E11","XXX","11S"]
Output: [0,0]

Constraints:

	- `2 <= board.length == board[i].length <= 100`

### Solution

```javascript
/**
 * @param {string[]} board
 * @return {number[]}
 */
var pathsWithMaxScore = function(board) {
    const MOD = 1000000007;
    const n = board.length;

    const score = Array.from({ length: n }, () =>
        Array(n).fill(-1)
    );

    const ways = Array.from({ length: n }, () =>
        Array(n).fill(0)
    );

    score[0][0] = 0;
    ways[0][0] = 1;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'X') continue;
            if (score[i][j] === -1) continue;

            const directions = [
                [1, 0],  // down
                [0, 1],  // right
                [1, 1]   // diagonal
            ];

            for (const [dx, dy] of directions) {
                const ni = i + dx;
                const nj = j + dy;

                if (
                    ni >= n ||
                    nj >= n ||
                    board[ni][nj] === 'X'
                ) {
                    continue;
                }

                let value = 0;

                if (
                    board[ni][nj] !== 'S' &&
                    board[ni][nj] !== 'E'
                ) {
                    value = Number(board[ni][nj]);
                }

                const newScore = score[i][j] + value;

                if (newScore > score[ni][nj]) {
                    score[ni][nj] = newScore;
                    ways[ni][nj] = ways[i][j];
                } else if (newScore === score[ni][nj]) {
                    ways[ni][nj] =
                        (ways[ni][nj] + ways[i][j]) % MOD;
                }
            }
        }
    }

    if (ways[n - 1][n - 1] === 0) {
        return [0, 0];
    }

    return [
        score[n - 1][n - 1],
        ways[n - 1][n - 1]
    ];
};
```

### Notes

<h2>number-of-paths-with-max-score Notes</h2><hr>[ Time taken: 1hr 54m 1s ]

---

## 2605-count-anagrams

### Problem

Count Anagrams
https://leetcode.com/problems/count-anagrams

You are given a string `s` containing one or more words. Every consecutive pair of words is separated by a single space `' '`.

A string `t` is an anagram of string `s` if the `i^th` word of `t` is a permutation of the `i^th` word of `s`.

	- For example, `"acb dfe"` is an anagram of `"abc def"`, but `"def cab"` and `"adc bef"` are not.

Return the number of distinct anagrams of `s`. Since the answer may be very large, return it modulo `10^9 + 7`.

Example 1:

Input: s = "too hot"
Output: 18
Explanation: Some of the anagrams of the given string are "too hot", "oot hot", "oto toh", "too toh", and "too oht".

Example 2:

Input: s = "aa"
Output: 1
Explanation: There is only one anagram possible for the given string.

Constraints:

	- `1 <= s.length <= 10^5`

	- `s` consists of lowercase English letters and spaces `' '`.

	- There is single space between consecutive words.

### Solution

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var countAnagrams = function(s) {
const MOD = 1000000007n;

    const factorial = (n) => {
        let result = 1n;

        for (let i = 2n; i <= n; i++) {
            result = (result * i) % MOD;
        }

        return result;
    };

    const modPow = (base, exp) => {
        let result = 1n;

        while (exp > 0n) {
            if (exp % 2n === 1n) {
                result = (result * base) % MOD;
            }

            base = (base * base) % MOD;
            exp /= 2n;
        }

        return result;
    };

    const modInverse = (n) => {
        return modPow(n, MOD - 2n);
    };

    let answer = 1n;

    for (const word of s.split(' ')) {
        const count = {};

        for (const char of word) {
            count[char] = (count[char] || 0) + 1;
        }

        let ways = factorial(BigInt(word.length));

        for (const char in count) {
            ways =
                (ways *
                    modInverse(
                        factorial(BigInt(count[char]))
                    )) % MOD;
        }

        answer = (answer * ways) % MOD;
    }

    return Number(answer);
};
```

---

## 3919-network-recovery-pathways

### Problem

Network Recovery Pathways
https://leetcode.com/problems/network-recovery-pathways

You are given a directed acyclic graph of `n` nodes numbered from 0 to `n &minus; 1`. This is represented by a 2D array edges of length `m`, where edges[i] = [ui, vi, costi] indicates a one‑way communication from node ui to node vi with a recovery cost of costi.

Some nodes may be offline. You are given a boolean array online where online[i] = true means node i is online. Nodes 0 and `n &minus; 1` are always online.

A path from 0 to `n &minus; 1` is valid if:

	- All intermediate nodes on the path are online.

	The total recovery cost of all edges on the path does not exceed `k`.

For each valid path, define its score as the minimum edge‑cost along that path.

Return the maximum path score (i.e., the largest minimum-edge cost) among all valid paths. If no valid path exists, return -1.

Example 1:

Input: edges = [[0,1,5],[1,3,10],[0,2,3],[2,3,4]], online = [true,true,true,true], k = 10

Output: 3

Explanation:

The graph has two possible routes from node 0 to node 3:

Path `0 &rarr; 1 &rarr; 3`

Total cost = `5 + 10 = 15`, which exceeds k (`15 > 10`), so this path is invalid.

Path `0 &rarr; 2 &rarr; 3`

Total cost = `3 + 4 = 7 <= k`, so this path is valid.

The minimum edge‐cost along this path is `min(3, 4) = 3`.

There are no other valid paths. Hence, the maximum among all valid path‐scores is 3.

Example 2:

Input: edges = [[0,1,7],[1,4,5],[0,2,6],[2,3,6],[3,4,2],[2,4,6]], online = [true,true,true,false,true], k = 12

Output: 6

Explanation:

Node 3 is offline, so any path passing through 3 is invalid.

Consider the remaining routes from 0 to 4:

Path `0 &rarr; 1 &rarr; 4`

Total cost = `7 + 5 = 12 <= k`, so this path is valid.

The minimum edge‐cost along this path is `min(7, 5) = 5`.

Path `0 &rarr; 2 &rarr; 3 &rarr; 4`

Node 3 is offline, so this path is invalid regardless of cost.

Path `0 &rarr; 2 &rarr; 4`

Total cost = `6 + 6 = 12 <= k`, so this path is valid.

The minimum edge‐cost along this path is `min(6, 6) = 6`.

Among the two valid paths, their scores are 5 and 6. Therefore, the answer is 6.

Constraints:

	n == online.length
	2 <= n <= 5 * 10^4
	0 <= m == edges.length <= `min(10^5, n * (n - 1) / 2)`
	edges[i] = [ui, vi, costi]
	0 <= ui, vi < n
	ui != vi
	0 <= costi <= 10^9
	0 <= k <= 5 * 10^13
	online[i] is either true or false, and both online[0] and online[n &minus; 1] are true.
	The given graph is a directed acyclic graph.

### Solution

```javascript
/**
 * @param {number[][]} edges
 * @param {boolean[]} online
 * @param {number} k
 * @return {number}
 */
var findMaxPathScore = function(edges, online, k) {
    const n = online.length;

    let minCost = Infinity;
    let maxCost = 0;

    const adj = Array.from({ length: n }, () => []);

    for (const [u, v, cost] of edges) {
        adj[u].push([v, cost]);
        minCost = Math.min(minCost, cost);
        maxCost = Math.max(maxCost, cost);
    }

    function can(score) {
        const indegree = new Array(n).fill(0);

        for (const [u, v, cost] of edges) {
            if (cost < score) continue;

            if (u !== 0 && u !== n - 1 && !online[u]) continue;
            if (v !== 0 && v !== n - 1 && !online[v]) continue;

            indegree[v]++;
        }

        const queue = [];
        let head = 0;

        for (let i = 0; i < n; i++) {
            if (indegree[i] === 0) {
                queue.push(i);
            }
        }

        const topo = [];

        while (head < queue.length) {
            const node = queue[head++];
            topo.push(node);

            for (const [next, cost] of adj[node]) {
                if (cost < score) continue;

                if (node !== 0 && node !== n - 1 && !online[node]) continue;
                if (next !== 0 && next !== n - 1 && !online[next]) continue;

                if (--indegree[next] === 0) {
                    queue.push(next);
                }
            }
        }

        const dist = new Array(n).fill(Infinity);
        dist[0] = 0;

        for (const node of topo) {
            if (dist[node] === Infinity) continue;

            for (const [next, cost] of adj[node]) {
                if (cost < score) continue;

                if (node !== 0 && node !== n - 1 && !online[node]) continue;
                if (next !== 0 && next !== n - 1 && !online[next]) continue;

                const newCost = dist[node] + cost;

                if (newCost < dist[next]) {
                    dist[next] = newCost;
                }
            }
        }

        return dist[n - 1] <= k;
    }

    let left = minCost;
    let right = maxCost;
    let ans = -1;

    while (left <= right) {
        const mid = left + ((right - left) >> 1);

        if (can(mid)) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;
};
```

---
