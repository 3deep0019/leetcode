/**
 * @param {number[]} nums
 * @return {number}
 */
var uniqueXorTriplets = function(nums) {
    const n = nums.length;
    let m = n;
    
    m |= m >> 1;
    m |= m >> 2;
    m |= m >> 4;
    m |= m >> 8;
    m |= m >> 16;
    
    return (m + 1) >> ((3 / (n + 1)) | 0);
};