/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const n = nums.length;
    const freq = new Array(n + 1).fill(0);

    for (const num of nums) {
        freq[num]++;
    }

    let duplicate = -1;
    let missing = -1;

    for (let i = 1; i <= n; i++) {
        if (freq[i] === 2) {
            duplicate = i;
        } else if (freq[i] === 0) {
            missing = i;
        }
    }

    return [duplicate, missing];
};