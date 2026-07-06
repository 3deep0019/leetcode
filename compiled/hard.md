# LeetCode Hard Problems

4 problem(s)

## 220-contains-duplicate-iii

### Problem

<h2><a href="https://leetcode.com/problems/contains-duplicate-iii">Contains Duplicate III</a></h2> <img src='https://img.shields.io/badge/Difficulty-Hard-red' alt='Difficulty: Hard' /><hr><p>You are given an integer array <code>nums</code> and two integers <code>indexDiff</code> and <code>valueDiff</code>.</p>

<p>Find a pair of indices <code>(i, j)</code> such that:</p>

<ul>
	<li><code>i != j</code>,</li>
	<li><code>abs(i - j) &lt;= indexDiff</code>.</li>
	<li><code>abs(nums[i] - nums[j]) &lt;= valueDiff</code>, and</li>
</ul>

<p>Return <code>true</code><em> if such pair exists or </em><code>false</code><em> otherwise</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
<strong>Output:</strong> true
<strong>Explanation:</strong> We can choose (i, j) = (0, 3).
We satisfy the three conditions:
i != j --&gt; 0 != 3
abs(i - j) &lt;= indexDiff --&gt; abs(0 - 3) &lt;= 3
abs(nums[i] - nums[j]) &lt;= valueDiff --&gt; abs(1 - 1) &lt;= 0
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3
<strong>Output:</strong> false
<strong>Explanation:</strong> After trying all the possible pairs (i, j), we cannot satisfy the three conditions, so we return false.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>1 &lt;= indexDiff &lt;= nums.length</code></li>
	<li><code>0 &lt;= valueDiff &lt;= 10<sup>9</sup></code></li>
</ul>

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

<h2><a href="https://leetcode.com/problems/number-of-paths-with-max-score">Number of Paths with Max Score</a></h2> <img src='https://img.shields.io/badge/Difficulty-Hard-red' alt='Difficulty: Hard' /><hr><p>You are given a square <code>board</code>&nbsp;of characters. You can move on the board starting at the bottom right square marked with the character&nbsp;<code>&#39;S&#39;</code>.</p>

<p>You need&nbsp;to reach the top left square marked with the character <code>&#39;E&#39;</code>. The rest of the squares are labeled either with a numeric character&nbsp;<code>1, 2, ..., 9</code> or with an obstacle <code>&#39;X&#39;</code>. In one move you can go up, left or up-left (diagonally) only if there is no obstacle there.</p>

<p>Return a list of two integers: the first integer is the maximum sum of numeric characters you can collect, and the second is the number of such paths that you can take to get that maximum sum, <strong>taken modulo <code>10^9 + 7</code></strong>.</p>

<p>In case there is no path, return&nbsp;<code>[0, 0]</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> board = ["E23","2X2","12S"]
<strong>Output:</strong> [7,1]
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> board = ["E12","1X1","21S"]
<strong>Output:</strong> [4,2]
</pre><p><strong class="example">Example 3:</strong></p>
<pre><strong>Input:</strong> board = ["E11","XXX","11S"]
<strong>Output:</strong> [0,0]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= board.length == board[i].length &lt;= 100</code></li>
</ul>

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

<h2><a href="https://leetcode.com/problems/count-anagrams">Count Anagrams</a></h2> <img src='https://img.shields.io/badge/Difficulty-Hard-red' alt='Difficulty: Hard' /><hr><p>You are given a string <code>s</code> containing one or more words. Every consecutive pair of words is separated by a single space <code>&#39; &#39;</code>.</p>

<p>A string <code>t</code> is an <strong>anagram</strong> of string <code>s</code> if the <code>i<sup>th</sup></code> word of <code>t</code> is a <strong>permutation</strong> of the <code>i<sup>th</sup></code> word of <code>s</code>.</p>

<ul>
	<li>For example, <code>&quot;acb dfe&quot;</code> is an anagram of <code>&quot;abc def&quot;</code>, but <code>&quot;def cab&quot;</code>&nbsp;and <code>&quot;adc bef&quot;</code> are not.</li>
</ul>

<p>Return <em>the number of <strong>distinct anagrams</strong> of </em><code>s</code>. Since the answer may be very large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;too hot&quot;
<strong>Output:</strong> 18
<strong>Explanation:</strong> Some of the anagrams of the given string are &quot;too hot&quot;, &quot;oot hot&quot;, &quot;oto toh&quot;, &quot;too toh&quot;, and &quot;too oht&quot;.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;aa&quot;
<strong>Output:</strong> 1
<strong>Explanation:</strong> There is only one anagram possible for the given string.</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s</code> consists of lowercase English letters and spaces <code>&#39; &#39;</code>.</li>
	<li>There is single space between consecutive words.</li>
</ul>

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

<h2><a href="https://leetcode.com/problems/network-recovery-pathways">Network Recovery Pathways</a></h2> <img src='https://img.shields.io/badge/Difficulty-Hard-red' alt='Difficulty: Hard' /><hr><p data-end="502" data-start="75">You are given a directed acyclic graph of <code>n</code> nodes numbered from 0 to <code>n &minus; 1</code>. This is represented by a 2D array <code data-end="201" data-start="194">edges</code> of length<font face="monospace"> <code>m</code></font>, where <code data-end="255" data-start="227">edges[i] = [u<sub>i</sub>, v<sub>i</sub>, cost<sub>i</sub>]</code> indicates a one‑way communication from node <code data-end="304" data-start="300">u<sub>i</sub></code> to node <code data-end="317" data-start="313">v<sub>i</sub></code> with a recovery cost of <code data-end="349" data-start="342">cost<sub>i</sub></code>.</p>

<p data-end="502" data-start="75">Some nodes may be offline. You are given a boolean array <code data-end="416" data-start="408">online</code> where <code data-end="441" data-start="423">online[i] = true</code> means node <code data-end="456" data-start="453">i</code> is online. Nodes 0 and <code>n &minus; 1</code> are always online.</p>

<p data-end="547" data-start="504">A path from 0 to <code>n &minus; 1</code> is <strong data-end="541" data-start="532">valid</strong> if:</p>

<ul>
	<li>All intermediate nodes on the path are online.</li>
	<li data-end="676" data-start="605">The total recovery cost of all edges on the path does not exceed <code>k</code>.</li>
</ul>

<p data-end="771" data-start="653">For each valid path, define its <strong data-end="694" data-start="685">score</strong> as the minimum edge‑cost along that path.</p>

<p data-end="913" data-start="847">Return the <strong>maximum</strong> path score (i.e., the largest <strong>minimum</strong>-edge cost) among all valid paths. If no valid path exists, return -1.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">edges = [[0,1,5],[1,3,10],[0,2,3],[2,3,4]], online = [true,true,true,true], k = 10</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2025/06/06/graph-10.png" style="width: 239px; height: 267px;" /></p>

<ul data-end="551" data-start="146">
	<li data-end="462" data-start="146">
	<p data-end="206" data-start="148">The graph has two possible routes from node 0 to node 3:</p>

	<ol data-end="462" data-start="209">
		<li data-end="315" data-start="209">
		<p data-end="228" data-start="212">Path <code>0 &rarr; 1 &rarr; 3</code></p>

		<ul data-end="315" data-start="234">
			<li data-end="315" data-start="234">
			<p data-end="315" data-start="236">Total cost = <code>5 + 10 = 15</code>, which exceeds k (<code>15 &gt; 10</code>), so this path is invalid.</p>
			</li>
		</ul>
		</li>
		<li data-end="462" data-start="318">
		<p data-end="337" data-start="321">Path <code>0 &rarr; 2 &rarr; 3</code></p>

		<ul data-end="462" data-start="343">
			<li data-end="397" data-start="343">
			<p data-end="397" data-start="345">Total cost = <code>3 + 4 = 7 &lt;= k</code>, so this path is valid.</p>
			</li>
			<li data-end="462" data-start="403">
			<p data-end="462" data-start="405">The minimum edge‐cost along this path is <code>min(3, 4) = 3</code>.</p>
			</li>
		</ul>
		</li>
	</ol>
	</li>
	<li data-end="551" data-start="463">
	<p data-end="551" data-start="465">There are no other valid paths. Hence, the maximum among all valid path‐scores is 3.</p>
	</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">edges = [[0,1,7],[1,4,5],[0,2,6],[2,3,6],[3,4,2],[2,4,6]], online = [true,true,true,false,true], k = 12</span></p>

<p><strong>Output:</strong> <span class="example-io">6</span></p>

<p><strong>Explanation:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2025/06/06/graph-11.png" style="width: 343px; height: 194px;" /></p>

<ul>
	<li data-end="790" data-start="726">
	<p data-end="790" data-start="728">Node 3 is offline, so any path passing through 3 is invalid.</p>
	</li>
	<li data-end="1231" data-start="791">
	<p data-end="837" data-start="793">Consider the remaining routes from 0 to 4:</p>

	<ol data-end="1231" data-start="840">
		<li data-end="985" data-start="840">
		<p data-end="859" data-start="843">Path <code>0 &rarr; 1 &rarr; 4</code></p>

		<ul data-end="985" data-start="865">
			<li data-end="920" data-start="865">
			<p data-end="920" data-start="867">Total cost = <code>7 + 5 = 12 &lt;= k</code>, so this path is valid.</p>
			</li>
			<li data-end="985" data-start="926">
			<p data-end="985" data-start="928">The minimum edge‐cost along this path is <code>min(7, 5) = 5</code>.</p>
			</li>
		</ul>
		</li>
		<li data-end="1083" data-start="988">
		<p data-end="1011" data-start="991">Path <code>0 &rarr; 2 &rarr; 3 &rarr; 4</code></p>

		<ul data-end="1083" data-start="1017">
			<li data-end="1083" data-start="1017">
			<p data-end="1083" data-start="1019">Node 3 is offline, so this path is invalid regardless of cost.</p>
			</li>
		</ul>
		</li>
		<li data-end="1231" data-start="1086">
		<p data-end="1105" data-start="1089">Path <code>0 &rarr; 2 &rarr; 4</code></p>

		<ul data-end="1231" data-start="1111">
			<li data-end="1166" data-start="1111">
			<p data-end="1166" data-start="1113">Total cost = <code>6 + 6 = 12 &lt;= k</code>, so this path is valid.</p>
			</li>
			<li data-end="1231" data-start="1172">
			<p data-end="1231" data-start="1174">The minimum edge‐cost along this path is <code>min(6, 6) = 6</code>.</p>
			</li>
		</ul>
		</li>
	</ol>
	</li>
	<li data-end="1314" data-is-last-node="" data-start="1232">
	<p data-end="1314" data-is-last-node="" data-start="1234">Among the two valid paths, their scores are 5 and 6. Therefore, the answer is 6.</p>
	</li>
</ul>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li data-end="42" data-start="20"><code data-end="40" data-start="20">n == online.length</code></li>
	<li data-end="63" data-start="45"><code data-end="61" data-start="45">2 &lt;= n &lt;= 5 * 10<sup>4</sup></code></li>
	<li data-end="102" data-start="66"><code data-end="100" data-start="66">0 &lt;= m == edges.length &lt;= </code><code>min(10<sup>5</sup>, n * (n - 1) / 2)</code></li>
	<li data-end="102" data-start="66"><code data-end="127" data-start="105">edges[i] = [u<sub>i</sub>, v<sub>i</sub>, cost<sub>i</sub>]</code></li>
	<li data-end="151" data-start="132"><code data-end="149" data-start="132">0 &lt;= u<sub>i</sub>, v<sub>i</sub> &lt; n</code></li>
	<li data-end="166" data-start="154"><code data-end="164" data-start="154">u<sub>i</sub> != v<sub>i</sub></code></li>
	<li data-end="191" data-start="169"><code data-end="189" data-start="169">0 &lt;= cost<sub>i</sub> &lt;= 10<sup>9</sup></code></li>
	<li data-end="213" data-start="194"><code data-end="211" data-start="194">0 &lt;= k &lt;= 5 * 10<sup>13</sup></code></li>
	<li data-end="309" data-start="216"><code data-end="227" data-start="216">online[i]</code> is either <code data-end="244" data-is-only-node="" data-start="238">true</code> or <code data-end="255" data-start="248">false</code>, and both <code data-end="277" data-start="266">online[0]</code> and <code data-end="295" data-start="282">online[n &minus; 1]</code> are <code data-end="306" data-start="300">true</code>.</li>
	<li data-end="362" data-is-last-node="" data-start="312">The given graph is a directed acyclic graph.</li>
</ul>

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
