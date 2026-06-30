/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x;

    let low = 1;
    let high = Math.floor(x / 2); 
    let ans = 0;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        let square = mid * mid;

        if (square === x) {
            return mid;
        } else if (square < x) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return ans;
};