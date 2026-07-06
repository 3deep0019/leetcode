/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxCounts = 0;
    let temp = 0;
    for (let i = 0; i < nums.length;i++){
        if (nums[i] == 1) {
            temp++
            if (temp > maxCounts) {
                maxCounts = temp
            }
        } else {
            temp=0
        }
    }
    return maxCounts;
};