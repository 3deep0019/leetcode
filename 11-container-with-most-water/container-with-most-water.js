/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    const n = height.length
    let left = 0, right = n - 1, max = 0;

    while(left<right){
        area = (right-left) * Math.min(height[left],height[right]);
        max = Math.max(max,area);
        if(height[left] <= height[right]) left++;
        else right--;
    }

    return max
};