/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const newArr = [];
    for(let i=0;i<nums.length/2;i++){
        newArr.push(nums[i]);
        newArr.push(nums[i+n]);
    }

    return newArr
};