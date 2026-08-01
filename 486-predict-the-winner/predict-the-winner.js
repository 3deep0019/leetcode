/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function(nums) {
    const n = nums.length;
    if (!(n & 1)) return true;

    const maxDiff = _.memoize(
        (i, j) => {
            if (i === j) return nums[i];
            return Math.max(nums[i] - maxDiff(i + 1, j),
                            nums[j] - maxDiff(i, j - 1));
        },
        (i, j) => (i << 16) | j
    );

    return maxDiff(0, n - 1) >= 0;
};