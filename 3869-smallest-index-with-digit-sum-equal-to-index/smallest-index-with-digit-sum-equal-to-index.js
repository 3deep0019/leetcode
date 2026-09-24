/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    let min = Infinity;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        let n = nums[i];
        while (n > 0) {
            const digit = n % 10;
            sum += digit;
            n = parseInt(n / 10);
        }
        if (i == sum) {
            min = Math.min(min, i);
        }
    }
    return min != Infinity ? min : -1;
};