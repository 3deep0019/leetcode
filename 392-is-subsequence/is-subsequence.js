/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sCount = 0;
    
    for (const _t of t) {
        if (s[sCount] == _t) {
            sCount++;
        }
    }
    return sCount == s.length
};