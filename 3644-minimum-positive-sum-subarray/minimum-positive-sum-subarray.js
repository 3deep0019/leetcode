/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function(nums, l, r) {
    const pre = [0];  // pre[i] = sum(nums[:i])
    for (const x of nums) pre.push(pre.at(-1) + x);
    let best = Infinity;
    for (let k = l; k <= r; k++)
        for (let i = 0; i + k < pre.length; i++) {
            const s = pre[i + k] - pre[i];
            if (s > 0) best = Math.min(best, s);
        }
    return best === Infinity ? -1 : best;
};