/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let removeZero = 1;
    let duplicate = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== duplicate) {
            duplicate = nums[i];
            nums[removeZero] = nums[i];
            removeZero++
        }
        
    }
    const length = nums.length;
    while (removeZero < length) {
        nums.pop();
        removeZero++;
    }
    return nums.length
};