/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let ans = "";
    let count = 0;

    for (const c of s) {
        if (c === '(') {
            if (count > 0) ans += c;
            count++;
        } else {
            count--;
            if (count > 0) ans += c;
        }
    }

    return ans;
};