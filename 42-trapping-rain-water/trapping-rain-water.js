/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const n = height.length; maxL = new Array(n).fill(0), maxR = new Array(n).fill(0);
    let total = 0;

    maxL[0] = height[0];
    maxR[n - 1] = height[n - 1];

    for(let i = 1;i<n-1;i++){
        maxL[i] = Math.max(height[i], maxL[i-1])
    }

    for(let i = n - 2;i>=0;i--){
        maxR[i] = Math.max(height[i], maxR[i+1])
    }

    for(let i = 0;i<n-1;i++){
        total += Math.max(0, (Math.min(maxL[i],maxR[i]) - height[i]))
    }

    return total

};