/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
  const result = [];
  nums = nums.sort((a, b) => a - b);

  for (let i = nums[0]; i < nums[nums.length - 1]; i++) {
    console.log(i);
    if (nums.indexOf(i + 1) == -1) {
      result.push(i + 1);
    }
  }

  return result;
};