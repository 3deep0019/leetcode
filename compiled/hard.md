# LeetCode Hard Problems

14 problem(s)

## 42-trapping-rain-water

### Problem

Trapping Rain Water
https://leetcode.com/problems/trapping-rain-water

Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.

Example 1:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9

Constraints:

	- `n == height.length`

	- `1 <= n <= 2 * 10^4`

	- `0 <= height[i] <= 10^5`

### Solution

```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const n = height.length; maxL = new Array(n).fill(0), maxR = new Array(n).fill(0);
    let total = 0;

    maxL[0] = height[0];
    maxR[n - 1] = height[n - 1];

    for(let i = 1;i<n-1;i++){
        maxL[i] = Math.max(height[i], maxL[i-1])
    }

    for(let i = n - 2;i>=0;i--){
        maxR[i] = Math.max(height[i], maxR[i+1])
    }

    for(let i = 0;i<n-1;i++){
        total += Math.max(0, (Math.min(maxL[i],maxR[i]) - height[i]))
    }

    return total

};
```

---

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

## 460-lfu-cache

### Problem

LFU Cache
https://leetcode.com/problems/lfu-cache

Design and implement a data structure for a Least Frequently Used (LFU) cache.

Implement the `LFUCache` class:

	- `LFUCache(int capacity)` Initializes the object with the `capacity` of the data structure.

	- `int get(int key)` Gets the value of the `key` if the `key` exists in the cache. Otherwise, returns `-1`.

	- `void put(int key, int value)` Update the value of the `key` if present, or inserts the `key` if not already present. When the cache reaches its `capacity`, it should invalidate and remove the least frequently used key before inserting a new item. For this problem, when there is a tie (i.e., two or more keys with the same frequency), the least recently used `key` would be invalidated.

To determine the least frequently used key, a use counter is maintained for each key in the cache. The key with the smallest use counter is the least frequently used key.

When a key is first inserted into the cache, its use counter is set to `1` (due to the `put` operation). The use counter for a key in the cache is incremented either a `get` or `put` operation is called on it.

The functions get and put must each run in `O(1)` average time complexity.

Example 1:

Input
["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, 3, null, -1, 3, 4]

Explanation
// cnt(x) = the use counter for key x
// cache=[] will show the last used order for tiebreakers (leftmost element is  most recent)
LFUCache lfu = new LFUCache(2);
lfu.put(1, 1);   // cache=[1,_], cnt(1)=1
lfu.put(2, 2);   // cache=[2,1], cnt(2)=1, cnt(1)=1
lfu.get(1);      // return 1
                 // cache=[1,2], cnt(2)=1, cnt(1)=2
lfu.put(3, 3);   // 2 is the LFU key because cnt(2)=1 is the smallest, invalidate 2.
                 // cache=[3,1], cnt(3)=1, cnt(1)=2
lfu.get(2);      // return -1 (not found)
lfu.get(3);      // return 3
                 // cache=[3,1], cnt(3)=2, cnt(1)=2
lfu.put(4, 4);   // Both 1 and 3 have the same cnt, but 1 is LRU, invalidate 1.
                 // cache=[4,3], cnt(4)=1, cnt(3)=2
lfu.get(1);      // return -1 (not found)
lfu.get(3);      // return 3
                 // cache=[3,4], cnt(4)=1, cnt(3)=3
lfu.get(4);      // return 4
                 // cache=[4,3], cnt(4)=2, cnt(3)=3

Constraints:

	- `1 <= capacity <= 10^4`

	- `0 <= key <= 10^5`

	- `0 <= value <= 10^9`

	- At most `2 * 10^5` calls will be made to `get` and `put`.

### Solution

```javascript
/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();
  this.freqMap = new Map();
  this.minFreq = 1;
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  if (!this.cache.has(key)) return -1;

  const node = this.cache.get(key);
  this._updateFrequency(key, node);

  return node.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (this.capacity === 0) return;

  // Update existing key
  if (this.cache.has(key)) {
    const node = this.cache.get(key);
    node.value = value;
    this._updateFrequency(key, node);
    return;
  }

  // Cache full -> Evict LFU + LRU
  if (this.cache.size === this.capacity) {
    const bucket = this.freqMap.get(this.minFreq);

    // First inserted key = LRU
    const evictKey = bucket.keys().next().value;

    bucket.delete(evictKey);

    if (bucket.size === 0) {
      this.freqMap.delete(this.minFreq);
    }

    this.cache.delete(evictKey);
  }

  // Insert new key
  const node = {
    value,
    freq: 1,
  };

  this.cache.set(key, node);

  if (!this.freqMap.has(1)) {
    this.freqMap.set(1, new Map());
  }

  this.freqMap.get(1).set(key, true);

  this.minFreq = 1;
};

LFUCache.prototype._updateFrequency = function (key, node) {
  const oldFreq = node.freq;
  const newFreq = oldFreq + 1;

  const oldBucket = this.freqMap.get(oldFreq);
  oldBucket.delete(key);

  if (oldBucket.size === 0) {
    this.freqMap.delete(oldFreq);

    if (this.minFreq === oldFreq) {
      this.minFreq++;
    }
  }

  node.freq = newFreq;

  if (!this.freqMap.has(newFreq)) {
    this.freqMap.set(newFreq, new Map());
  }

  this.freqMap.get(newFreq).set(key, true);
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
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

## 1522-stone-game-iii

### Problem

Stone Game III
https://leetcode.com/problems/stone-game-iii

Alice and Bob continue their games with piles of stones. There are several stones arranged in a row, and each stone has an associated value which is an integer given in the array `stoneValue`.

Alice and Bob take turns, with Alice starting first. On each player's turn, that player can take `1`, `2`, or `3` stones from the first remaining stones in the row.

The score of each player is the sum of the values of the stones taken. The score of each player is `0` initially.

The objective of the game is to end with the highest score, and the winner is the player with the highest score and there could be a tie. The game continues until all the stones have been taken.

Assume Alice and Bob play optimally.

Return `"Alice"` if Alice will win, `"Bob"` if Bob will win, or `"Tie"` if they will end the game with the same score.

Example 1:

Input: stoneValue = [1,2,3,7]
Output: "Bob"
Explanation: Alice will always lose. Her best move will be to take three piles and the score become 6. Now the score of Bob is 7 and Bob wins.

Example 2:

Input: stoneValue = [1,2,3,-9]
Output: "Alice"
Explanation: Alice must choose all the three piles at the first move to win and leave Bob with negative score.
If Alice chooses one pile her score will be 1 and the next move Bob's score becomes 5. In the next move, Alice will take the pile with value = -9 and lose.
If Alice chooses two piles her score will be 3 and the next move Bob's score becomes 3. In the next move, Alice will take the pile with value = -9 and also lose.
Remember that both play optimally so here Alice will choose the scenario that makes her win.

Example 3:

Input: stoneValue = [1,2,3,6]
Output: "Tie"
Explanation: Alice cannot win this game. She can end the game in a draw if she decided to choose all the first three piles, otherwise she will lose.

Constraints:

	- `1 <= stoneValue.length <= 5 * 10^4`

	- `-1000 <= stoneValue[i] <= 1000`

### Solution

```javascript
/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function(stoneValue) {
    const n = stoneValue.length;

    const dp = new Array(n + 1).fill(0);

    for (let i = n - 1; i >= 0; i--) {

        dp[i] = -Infinity;
        let sum = 0;

        for (let j = i; j < Math.min(n, i + 3); j++) {

            sum += stoneValue[j];

            dp[i] = Math.max(dp[i], sum - dp[j + 1]);
        }
    }

    if (dp[0] > 0) return "Alice";
    if (dp[0] < 0) return "Bob";
    return "Tie";
};
```

---

## 1617-stone-game-iv

### Problem

Stone Game IV
https://leetcode.com/problems/stone-game-iv

Alice and Bob take turns playing a game, with Alice starting first.

Initially, there are `n` stones in a pile. On each player's turn, that player makes a move consisting of removing any non-zero square number of stones in the pile.

Also, if a player cannot make a move, he/she loses the game.

Given a positive integer `n`, return `true` if and only if Alice wins the game otherwise return `false`, assuming both players play optimally.

Example 1:

Input: n = 1
Output: true
Explanation: Alice can remove 1 stone winning the game because Bob doesn't have any moves.

Example 2:

Input: n = 2
Output: false
Explanation: Alice can only remove 1 stone, after that Bob removes the last one winning the game (2 -> 1 -> 0).

Example 3:

Input: n = 4
Output: true
Explanation: n is already a perfect square, Alice can win with one move, removing 4 stones (4 -> 0).

Constraints:

	- `1 <= n <= 10^5`

### Solution

```javascript
/**
 * @param {number} n
 * @return {boolean}
 */
const MAX = 1e5;
const dp = Array(MAX + 1).fill(false);

for (let i = 0; i <= MAX; i++) {
    if (dp[i]) continue;
    for (let j = 1; j * j <= MAX - i; j++)
        dp[i + j * j] = 1;
}

const winnerSquareGame = n => dp[n];
```

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

## 3583-sorted-gcd-pair-queries

### Problem

Sorted GCD Pair Queries
https://leetcode.com/problems/sorted-gcd-pair-queries

You are given an integer array `nums` of length `n` and an integer array `queries`.

Let `gcdPairs` denote an array obtained by calculating the GCD of all possible pairs `(nums[i], nums[j])`, where `0 <= i < j < n`, and then sorting these values in ascending order.

For each query `queries[i]`, you need to find the element at index `queries[i]` in `gcdPairs`.

Return an integer array `answer`, where `answer[i]` is the value at `gcdPairs[queries[i]]` for each query.

The term `gcd(a, b)` denotes the greatest common divisor of `a` and `b`.

Example 1:

Input: nums = [2,3,4], queries = [0,2,2]

Output: [1,2,2]

Explanation:

`gcdPairs = [gcd(nums[0], nums[1]), gcd(nums[0], nums[2]), gcd(nums[1], nums[2])] = [1, 2, 1]`.

After sorting in ascending order, `gcdPairs = [1, 1, 2]`.

So, the answer is `[gcdPairs[queries[0]], gcdPairs[queries[1]], gcdPairs[queries[2]]] = [1, 2, 2]`.

Example 2:

Input: nums = [4,4,2,1], queries = [5,3,1,0]

Output: [4,2,1,1]

Explanation:

`gcdPairs` sorted in ascending order is `[1, 1, 1, 2, 2, 4]`.

Example 3:

Input: nums = [2,2], queries = [0,0]

Output: [2,2]

Explanation:

`gcdPairs = [2]`.

Constraints:

	- `2 <= n == nums.length <= 10^5`

	- `1 <= nums[i] <= 5 * 10^4`

	- `1 <= queries.length <= 10^5`

	- `0 <= queries[i] < n * (n - 1) / 2`

### Solution

```javascript
/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var gcdValues = function(nums, queries) {
    const maxNum = Math.max(...nums);

    // Frequency of each number
    const freq = new Array(maxNum + 1).fill(0);

    for (const num of nums) {
        freq[num]++;
    }

    // Number of pairs having gcd exactly g
    const gcdCount = new Array(maxNum + 1).fill(0);

    for (let g = maxNum; g >= 1; g--) {

        let divisibleCount = 0;

        // Count numbers divisible by g
        for (let multiple = g; multiple <= maxNum; multiple += g) {
            divisibleCount += freq[multiple];
        }

        // Total possible pairs
        let pairs = divisibleCount * (divisibleCount - 1) / 2;

        // Remove pairs already belonging to larger gcd values
        for (let multiple = g * 2; multiple <= maxNum; multiple += g) {
            pairs -= gcdCount[multiple];
        }

        gcdCount[g] = pairs;
    }

    // Build sorted gcd array positions using prefix sums
    const prefix = [];
    let total = 0;

    for (let g = 1; g <= maxNum; g++) {
        total += gcdCount[g];
        prefix.push([total, g]);
    }

    const result = [];

    for (const q of queries) {

        let left = 0;
        let right = prefix.length - 1;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (prefix[mid][0] > q) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        result.push(prefix[left][1]);
    }

    return result;
};
```

---

## 3608-find-the-number-of-subsequences-with-equal-gcd

### Problem

Find the Number of Subsequences With Equal GCD
https://leetcode.com/problems/find-the-number-of-subsequences-with-equal-gcd

You are given an integer array `nums`.

Your task is to find the number of pairs of non-empty subsequences `(seq1, seq2)` of `nums` that satisfy the following conditions:

	- The subsequences `seq1` and `seq2` are disjoint, meaning no index of `nums` is common between them.

	- The GCD of the elements of `seq1` is equal to the GCD of the elements of `seq2`.

Return the total number of such pairs.

Since the answer may be very large, return it modulo `10^9 + 7`.

Example 1:

Input: nums = [1,2,3,4]

Output: 10

Explanation:

The subsequence pairs which have the GCD of their elements equal to 1 are:

	- `([1, 2, 3, 4], [1, 2, 3, 4])`

	- `([1, 2, 3, 4], [1, 2, 3, 4])`

	- `([1, 2, 3, 4], [1, 2, 3, 4])`

	- `([1, 2, 3, 4], [1, 2, 3, 4])`

	- `([1, 2, 3, 4], [1, 2, 3, 4])`

	- `([1, 2, 3, 4], [1, 2, 3, 4])`

	- `([1, 2, 3, 4], [1, 2, 3, 4])`

	- `([1, 2, 3, 4], [1, 2, 3, 4])`

	- `([1, 2, 3, 4], [1, 2, 3, 4])`

	- `([1, 2, 3, 4], [1, 2, 3, 4])`

Example 2:

Input: nums = [10,20,30]

Output: 2

Explanation:

The subsequence pairs which have the GCD of their elements equal to 10 are:

	- `([10, 20, 30], [10, 20, 30])`

	- `([10, 20, 30], [10, 20, 30])`

Example 3:

Input: nums = [1,1,1,1]

Output: 50

Constraints:

	- `1 <= nums.length <= 200`

	- `1 <= nums[i] <= 200`

### Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var subsequencePairCount = function(nums) {
    const MOD = 1000000007;
    let n = nums.length;
    let MAX= 200; 
    let dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: MAX + 1 }, () =>
        Array(MAX + 1).fill(-1)
    )
);
    
    function rec(i,gcd1,gcd2){
        if(i===nums.length){
            if(gcd1 !==0){
                if(gcd1==gcd2){
                    return 1
                }
                else return 0
            }
                else return 0
            
        }
        
        if(dp[i][gcd1][gcd2] !== -1) return dp[i][gcd1][gcd2];

        let ans = (rec(i+1,gcd(gcd1,nums[i]),gcd2) + rec(i+1,gcd1,gcd(gcd2,nums[i])) + rec(i+1,gcd1,gcd2))% MOD
        dp[i][gcd1][gcd2] = ans;
        return ans;
    }
    let gcdDp = Array.from({length: MAX+1}, () => Array(MAX+1).fill(-1));
   function gcd(a,b){
    let x=a;
    let y=b
    if(gcdDp[x][y] !== -1) return gcdDp[x][y];
    
        if(a ==0) return b;
        else{
            while (b !== 0) {
                 [a, b] = [b, a % b];
            }
           gcdDp[x][y] = a;
           return gcdDp[x][y]
        }
    }
    return rec(0,0,0)
};
```

---

## 3635-smallest-divisible-digit-product-ii

### Problem

Smallest Divisible Digit Product II
https://leetcode.com/problems/smallest-divisible-digit-product-ii

You are given a string `num` which represents a positive integer, and an integer `t`.

A number is called zero-free if none of its digits are 0.

Return a string representing the smallest zero-free number greater than or equal to `num` such that the product of its digits is divisible by `t`. If no such number exists, return `"-1"`.

Example 1:

Input: num = "1234", t = 256

Output: "1488"

Explanation:

The smallest zero-free number that is greater than 1234 and has the product of its digits divisible by 256 is 1488, with the product of its digits equal to 256.

Example 2:

Input: num = "12355", t = 50

Output: "12355"

Explanation:

12355 is already zero-free and has the product of its digits divisible by 50, with the product of its digits equal to 150.

Example 3:

Input: num = "11111", t = 26

Output: "-1"

Explanation:

No number greater than 11111 has the product of its digits divisible by 26.

Constraints:

	- `2 <= num.length <= 2 * 10^5`

	- `num` consists only of digits in the range `['0', '9']`.

	- `num` does not contain leading zeros.

	- `1 <= t <= 10^14`

### Solution

```javascript
/**
 * @param {string} num
 * @param {number} t
 * @return {string}
 */
var smallestNumber = function (num, t) {
    let temp = t;
    for (let i = 2; i <= 9; i++) {
        while (temp % i === 0) {
            temp /= i;
        }
    }
    if (temp > 1) {
        return "-1";
    }

    const n = num.length;
    const rem = new Array(n + 1);
    rem[0] = t;
    let pos = n - 1;

    const numArr = num.split("");
    for (let i = 0; i < n; i++) {
        if (numArr[i] === "0") {
            pos = i;
            break;
        }
        rem[i + 1] = Math.floor(rem[i] / gcd(rem[i], parseInt(numArr[i])));
    }

    if (rem[n] === 1) {
        return num;
    }

    for (let i = pos; i >= 0; i--) {
        while (true) {
            numArr[i] = String.fromCharCode(numArr[i].charCodeAt(0) + 1);
            if (numArr[i] > "9") {
                break;
            }

            let tNow = Math.floor(rem[i] / gcd(rem[i], parseInt(numArr[i])));
            let k = 9;

            for (let j = n - 1; j > i; j--) {
                while (tNow % k !== 0) {
                    k--;
                }
                tNow = Math.floor(tNow / k);
                numArr[j] = String.fromCharCode("0".charCodeAt(0) + k);
            }

            if (tNow === 1) {
                return numArr.join("");
            }
        }
    }

    let ans = [];
    let originalT = t;
    for (let i = 9; i > 1; i--) {
        while (originalT % i === 0) {
            ans.push(String.fromCharCode("0".charCodeAt(0) + i));
            originalT = Math.floor(originalT / i);
        }
    }

    const padding = Math.max(n + 1 - ans.length, 0);
    for (let i = 0; i < padding; i++) {
        ans.push("1");
    }

    return ans.reverse().join("");
};

function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
```

---

## 3804-maximize-active-section-with-trade-ii

### Problem

Maximize Active Section with Trade II
https://leetcode.com/problems/maximize-active-section-with-trade-ii

You are given a binary string `s` of length `n`, where:

	- `'1'` represents an active section.

	- `'0'` represents an inactive section.

You can perform at most one trade to maximize the number of active sections in `s`. In a trade, you:

	- Convert a contiguous block of `'1'`s that is surrounded by `'0'`s to all `'0'`s.

	- Afterward, convert a contiguous block of `'0'`s that is surrounded by `'1'`s to all `'1'`s.

Additionally, you are given a 2D array `queries`, where `queries[i] = [li, ri]` represents a substring `s[li...ri]`.

For each query, determine the maximum possible number of active sections in `s` after making the optimal trade on the substring `s[li...ri]`.

Return an array `answer`, where `answer[i]` is the result for `queries[i]`.

Note

	- For each query, treat `s[li...ri]` as if it is augmented with a `'1'` at both ends, forming `t = '1' + s[li...ri] + '1'`. The augmented `'1'`s do not contribute to the final count.

	- The queries are independent of each other.

Example 1:

Input: s = "01", queries = [[0,1]]

Output: [1]

Explanation:

Because there is no block of `'1'`s surrounded by `'0'`s, no valid trade is possible. The maximum number of active sections is 1.

Example 2:

Input: s = "0100", queries = [[0,3],[0,2],[1,3],[2,3]]

Output: [4,3,1,1]

Explanation:

	- Query `[0, 3]` &rarr; Substring `"0100"` &rarr; Augmented to `"101001"`

	Choose `"0100"`, convert `"0100"` &rarr; `"0000"` &rarr; `"1111"`.

	The final string without augmentation is `"1111"`. The maximum number of active sections is 4.

	- Query `[0, 2]` &rarr; Substring `"010"` &rarr; Augmented to `"10101"`

	Choose `"010"`, convert `"010"` &rarr; `"000"` &rarr; `"111"`.

	The final string without augmentation is `"1110"`. The maximum number of active sections is 3.

	- Query `[1, 3]` &rarr; Substring `"100"` &rarr; Augmented to `"11001"`

	Because there is no block of `'1'`s surrounded by `'0'`s, no valid trade is possible. The maximum number of active sections is 1.

	- Query `[2, 3]` &rarr; Substring `"00"` &rarr; Augmented to `"1001"`

	Because there is no block of `'1'`s surrounded by `'0'`s, no valid trade is possible. The maximum number of active sections is 1.

Example 3:

Input: s = "1000100", queries = [[1,5],[0,6],[0,4]]

Output: [6,7,2]

Explanation:

Query `[1, 5]` &rarr; Substring "00010" &rarr; Augmented to "1000101"
	Choose "00010", convert "00010" &rarr; "00000" &rarr; "11111".

	The final string without augmentation is "1111110". The maximum number of active sections is 6.

Query `[0, 6]` &rarr; Substring "1000100" &rarr; Augmented to "110001001"
	Choose "000100", convert "000100" &rarr; "000000" &rarr; "111111".

	The final string without augmentation is "1111111". The maximum number of active sections is 7.

Query `[0, 4]` &rarr; Substring "10001" &rarr; Augmented to "1100011"
	Because there is no block of `'1'`s surrounded by `'0'`s, no valid trade is possible. The maximum number of active sections is 2.

Example 4:

Input: s = "01010", queries = [[0,3],[1,4],[1,3]]

Output: [4,4,2]

Explanation:

	- Query `[0, 3]` &rarr; Substring `"0101"` &rarr; Augmented to `"101011"`

	Choose `"010"`, convert `"010"` &rarr; `"000"` &rarr; `"111"`.

	The final string without augmentation is `"11110"`. The maximum number of active sections is 4.

	- Query `[1, 4]` &rarr; Substring `"1010"` &rarr; Augmented to `"110101"`

	Choose `"010"`, convert `"010"` &rarr; `"000"` &rarr; `"111"`.

	The final string without augmentation is `"01111"`. The maximum number of active sections is 4.

	- Query `[1, 3]` &rarr; Substring `"101"` &rarr; Augmented to `"11011"`

	Because there is no block of `'1'`s surrounded by `'0'`s, no valid trade is possible. The maximum number of active sections is 2.

Constraints:

	- `1 <= n == s.length <= 10^5`

	- `1 <= queries.length <= 10^5`

	- `s[i]` is either `'0'` or `'1'`.

	- `queries[i] = [li, ri]`

	- `0 <= li <= ri < n`

### Solution

```javascript
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var maxActiveSectionsAfterTrade = function(s, queries) {
    let n = s.length;
    let total_ones = 0;
    
    for (let i = 0; i < n; i++) {
        if (s[i] === '1') total_ones++;
    }
    
    let type = [];
    let start = [];
    let end_idx = [];
    
    let i = 0;
    while (i < n) {
        let j = i;
        while (j < n && s[j] === s[i]) {
            j++;
        }
        type.push(parseInt(s[i]));
        start.push(i);
        end_idx.push(j - 1);
        i = j;
    }
    
    let N = type.length;
    
    let pos_to_seg = new Int32Array(n);
    for (let i = 0; i < N; i++) {
        for (let j = start[i]; j <= end_idx[i]; j++) {
            pos_to_seg[j] = i;
        }
    }
    
    let ans = new Int32Array(N);
    for (let i = 1; i < N - 1; i++) {
        if (type[i] === 1) {
            ans[i] = (end_idx[i - 1] - start[i - 1] + 1) + (end_idx[i + 1] - start[i + 1] + 1);
        }
    }
    
    let log_table = new Int32Array(N + 1);
    for (let i = 2; i <= N; i++) {
        log_table[i] = log_table[Math.floor(i / 2)] + 1;
    }
    
    let K = log_table[N] + 1;
    let st = Array.from({ length: K }, () => new Int32Array(N));
    
    for (let i = 0; i < N; i++) {
        st[0][i] = ans[i];
    }
    
    for (let j = 1; j < K; j++) {
        for (let i = 0; i + (1 << j) <= N; i++) {
            st[j][i] = Math.max(st[j - 1][i], st[j - 1][i + (1 << (j - 1))]);
        }
    }
    
    const queryRMQ = (L_q, R_q) => {
        if (L_q > R_q) return 0;
        let j = log_table[R_q - L_q + 1];
        return Math.max(st[j][L_q], st[j][R_q - (1 << j) + 1]);
    };
    
    const evalSeg = (idx, L, R, segL, segR) => {
        if (idx <= segL || idx >= segR) return 0;
        if (type[idx] === 0) return 0;
        
        let left_len = 0;
        if (idx - 1 === segL) left_len = Math.max(0, end_idx[idx - 1] - L + 1);
        else left_len = end_idx[idx - 1] - start[idx - 1] + 1;
        
        let right_len = 0;
        if (idx + 1 === segR) right_len = Math.max(0, R - start[idx + 1] + 1);
        else right_len = end_idx[idx + 1] - start[idx + 1] + 1;
        
        return left_len + right_len;
    };
    
    let res = [];
    
    for (let q of queries) {
        let L = q[0];
        let R = q[1];
        
        let segL = pos_to_seg[L];
        let segR = pos_to_seg[R];
        
        if (segR - segL < 2) {
            res.push(total_ones);
            continue;
        }
        
        let max_gain = 0;
        max_gain = Math.max(max_gain, evalSeg(segL + 1, L, R, segL, segR));
        max_gain = Math.max(max_gain, evalSeg(segR - 1, L, R, segL, segR));
        
        if (segL + 2 <= segR - 2) {
            max_gain = Math.max(max_gain, queryRMQ(segL + 2, segR - 2));
        }
        
        res.push(total_ones + max_gain);
    }
    
    return res;
};
```

---

## 3813-smallest-palindromic-rearrangement-ii

### Problem

Smallest Palindromic Rearrangement II
https://leetcode.com/problems/smallest-palindromic-rearrangement-ii

You are given a palindromic string `s` and an integer `k`.

Return the k-th lexicographically smallest palindromic permutation of `s`. If there are fewer than `k` distinct palindromic permutations, return an empty string.

Note: Different rearrangements that yield the same palindromic string are considered identical and are counted once.

Example 1:

Input: s = "abba", k = 2

Output: "baab"

Explanation:

	- The two distinct palindromic rearrangements of `"abba"` are `"abba"` and `"baab"`.

	- Lexicographically, `"abba"` comes before `"baab"`. Since `k = 2`, the output is `"baab"`.

Example 2:

Input: s = "aa", k = 2

Output: ""

Explanation:

	- There is only one palindromic rearrangement: "aa".

	- The output is an empty string since `k = 2` exceeds the number of possible rearrangements.

Example 3:

Input: s = "bacab", k = 1

Output: "abcba"

Explanation:

	- The two distinct palindromic rearrangements of `"bacab"` are `"abcba"` and `"bacab"`.

	- Lexicographically, `"abcba"` comes before `"bacab"`. Since `k = 1`, the output is `"abcba"`.

Constraints:

	- `1 <= s.length <= 10^4`

	- `s` consists of lowercase English letters.

	- `s` is guaranteed to be palindromic.

	- `1 <= k <= 10^6`

### Solution

```javascript
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var smallestPalindrome = function(s, k) {
    const freq = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 97]++;
    }
    
    const half = new Array(26).fill(0);
    let mid = "";
    let m = 0;
    
    for (let i = 0; i < 26; i++) {
        if (freq[i] % 2 !== 0) {
            mid += String.fromCharCode(i + 97);
        }
        half[i] = Math.floor(freq[i] / 2);
        m += half[i];
    }
    
    const getWays = (f, targetK) => {
        let ways = 1;
        let currLen = 0;
        for (let i = 0; i < 26; i++) {
            const count = f[i];
            if (count > 0) {
                currLen += count;
                let n = currLen;
                let r = count;
                
                if (r > n - r) r = n - r;
                let curNCr = 1;
                
                for (let j = 1; j <= r; j++) {
                    curNCr = Math.floor(curNCr * (n - j + 1) / j);
                    if (curNCr > targetK) {
                        curNCr = targetK + 1;
                        break;
                    }
                }
                ways *= curNCr;
                if (ways > targetK) return targetK + 1;
            }
        }
        return ways;
    };
    
    if (getWays(half, k) < k) {
        return "";
    }
    
    let firstHalf = "";
    for (let i = 0; i < m; i++) {
        for (let c = 0; c < 26; c++) {
            if (half[c] > 0) {
                half[c]--;
                const ways = getWays(half, k);
                
                if (ways >= k) {
                    firstHalf += String.fromCharCode(c + 97);
                    break;
                } else {
                    k -= ways;
                    half[c]++;
                }
            }
        }
    }
    
    return firstHalf + mid + firstHalf.split("").reverse().join("");
};
```

---

## 3852-path-existence-queries-in-a-graph-ii

### Problem

Path Existence Queries in a Graph II
https://leetcode.com/problems/path-existence-queries-in-a-graph-ii

You are given an integer `n` representing the number of nodes in a graph, labeled from 0 to `n - 1`.

You are also given an integer array `nums` of length `n` and an integer `maxDiff`.

An undirected edge exists between nodes `i` and `j` if the absolute difference between `nums[i]` and `nums[j]` is at most `maxDiff` (i.e., `|nums[i] - nums[j]| <= maxDiff`).

You are also given a 2D integer array `queries`. For each `queries[i] = [ui, vi]`, find the minimum distance between nodes `ui` and `vi`. If no path exists between the two nodes, return -1 for that query.

Return an array `answer`, where `answer[i]` is the result of the `i^th` query.

Note: The edges between the nodes are unweighted.

Example 1:

Input: n = 5, nums = [1,8,3,4,2], maxDiff = 3, queries = [[0,3],[2,4]]

Output: [1,1]

Explanation:

The resulting graph is:

			Query
			Shortest Path
			Minimum Distance

			[0, 3]
			0 &rarr; 3
			1

			[2, 4]
			2 &rarr; 4
			1

Thus, the output is `[1, 1]`.

Example 2:

Input: n = 5, nums = [5,3,1,9,10], maxDiff = 2, queries = [[0,1],[0,2],[2,3],[4,3]]

Output: [1,2,-1,1]

Explanation:

The resulting graph is:

			Query
			Shortest Path
			Minimum Distance

			[0, 1]
			0 &rarr; 1
			1

			[0, 2]
			0 &rarr; 1 &rarr; 2
			2

			[2, 3]
			None
			-1

			[4, 3]
			3 &rarr; 4
			1

Thus, the output is `[1, 2, -1, 1]`.

Example 3:

Input: n = 3, nums = [3,6,1], maxDiff = 1, queries = [[0,0],[0,1],[1,2]]

Output: [0,-1,-1]

Explanation:

There are no edges between any two nodes because:

	- Nodes 0 and 1: `|nums[0] - nums[1]| = |3 - 6| = 3 > 1`

	- Nodes 0 and 2: `|nums[0] - nums[2]| = |3 - 1| = 2 > 1`

	- Nodes 1 and 2: `|nums[1] - nums[2]| = |6 - 1| = 5 > 1`

Thus, no node can reach any other node, and the output is `[0, -1, -1]`.

Constraints:

	- `1 <= n == nums.length <= 10^5`

	- `0 <= nums[i] <= 10^5`

	- `0 <= maxDiff <= 10^5`

	- `1 <= queries.length <= 10^5`

	- `queries[i] == [ui, vi]`

	- `0 <= ui, vi < n`

### Solution

```javascript
/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {number[]}
 */
var pathExistenceQueries = function(n, nums, maxDiff, queries) {
    const LOG = 18;
    const vec = [];

    for (let i = 0; i < n; i++) {
        vec.push([nums[i], i]);
    }
    vec.sort((a, b) => {
        if (a[0] !== b[0]) 
            return a[0] - b[0];
        return a[1] - b[1];
    });
    const getSortIdx = new Array(n);
    for (let i = 0; i < n; i++) {
        getSortIdx[vec[i][1]] = i;
    }
    const st = Array.from({ length: n }, () => new Array(LOG).fill(0));
    let l = 0;
    for (let r = 0; r < n; r++) {
        while (vec[r][0] - vec[l][0] > maxDiff) {
            st[l][0] = r - 1;
            l++;
        }
    }
    while (l < n) {
        st[l][0] = n - 1;
        l++;
    }
    for (let j = 1; j < LOG; j++) {
        for (let i = 0; i < n; i++) {
            st[i][j] = st[st[i][j - 1]][j - 1];
        }
    }
    const ans = new Array(queries.length).fill(-1);

    for (let i = 0; i < queries.length; i++) {
        let a = getSortIdx[queries[i][0]];
        let b = getSortIdx[queries[i][1]];
        if (a > b) {
            [a, b] = [b, a];
        }
        if (a === b) {
            ans[i] = 0;
            continue;
        }
        let cur = a;
        let step = 0;
        for (let j = LOG - 1; j >= 0; j--) {
            if (st[cur][j] < b) {
                step += 1 << j;
                cur = st[cur][j];
            }
        }
        if (st[cur][0] >= b) {
            ans[i] = step + 1;
        }
    }
    return ans;
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
