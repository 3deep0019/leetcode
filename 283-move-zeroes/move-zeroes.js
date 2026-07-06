/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let insertPos = 0;

    for (const num of nums) {
        if (num !== 0) {
            nums[insertPos] = num;
            insertPos++;
        }
    }

    while (insertPos < nums.length) {
        nums[insertPos] = 0;
        insertPos++;
    }
};