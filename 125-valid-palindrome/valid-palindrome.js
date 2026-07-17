/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, "")
    if(!s) return true;
    let left = 0, right = s.length-1;
    while(left<right){
        if(s[left].toLowerCase() !== s[right].toLowerCase()) return false;
        left++;
        right--;
    }

    return true;
};