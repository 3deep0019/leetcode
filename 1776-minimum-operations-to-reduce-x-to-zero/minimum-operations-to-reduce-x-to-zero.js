/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    const k = nums.reduce((a, c) => a + c, 0) - x;
    if (k < 0) return -1;

    let best = -1, i = 0, s = 0, n = nums.length;
    for (let j = 0; j < n; j++) {
        s += nums[j];
        while (s > k)
            s -= nums[i++];

        if (s === k)
            best = Math.max(best, j - i + 1);
    }

    return best < 0 ? -1 : n - best;
};