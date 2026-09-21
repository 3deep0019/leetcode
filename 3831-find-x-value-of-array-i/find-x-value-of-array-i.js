/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultArray = function(nums, k) {
    const ans = new Array(k).fill(0);
    let dp = new Array(k).fill(0);

    for (const num of nums) {
        const x = num % k;
        const next = new Array(k).fill(0);
        next[x]++;

        for (let r = 0; r < k; r++) {
            const newR = (r * x) % k;
            next[newR] += dp[r];
        }

        for (let r = 0; r < k; r++) {
            ans[r] += next[r];
        }
        dp = next;
    }
    return ans;
};