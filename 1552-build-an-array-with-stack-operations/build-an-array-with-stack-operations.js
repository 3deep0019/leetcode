/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    const result = [];
    let i = 0;

    for (let num = 1; num <= n && i < target.length; num++) {
        if (num === target[i]) {
            result.push('Push');
            i++;
        } else {
            result.push('Push');
            result.push('Pop');
        }
    }

    return result;
};