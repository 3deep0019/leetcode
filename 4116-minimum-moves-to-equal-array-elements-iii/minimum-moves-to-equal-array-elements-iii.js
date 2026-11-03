/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let maxNum = -Infinity;
    let sum = 0;

    for(let num of nums) {
        sum += num;
        maxNum = Math.max(num, maxNum);
    }

    return nums.length * maxNum - sum;
};