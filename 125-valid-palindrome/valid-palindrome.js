/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (!s) return true;
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    let left = 0,
        right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
};