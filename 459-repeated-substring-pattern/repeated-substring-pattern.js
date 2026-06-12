/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let n = s.length;

    for (let len = 1; len <= n / 2; len++) {
        if (n % len === 0) {
            let pattern = s.substring(0, len);
            let temp = pattern.repeat(n / len);

            if (temp === s) return true;
        }
    }

    return false;
};