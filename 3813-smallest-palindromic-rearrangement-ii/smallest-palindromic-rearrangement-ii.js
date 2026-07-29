/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var smallestPalindrome = function(s, k) {
    const freq = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 97]++;
    }
    
    const half = new Array(26).fill(0);
    let mid = "";
    let m = 0;
    
    for (let i = 0; i < 26; i++) {
        if (freq[i] % 2 !== 0) {
            mid += String.fromCharCode(i + 97);
        }
        half[i] = Math.floor(freq[i] / 2);
        m += half[i];
    }
    
    const getWays = (f, targetK) => {
        let ways = 1;
        let currLen = 0;
        for (let i = 0; i < 26; i++) {
            const count = f[i];
            if (count > 0) {
                currLen += count;
                let n = currLen;
                let r = count;
                
                if (r > n - r) r = n - r;
                let curNCr = 1;
                
                for (let j = 1; j <= r; j++) {
                    curNCr = Math.floor(curNCr * (n - j + 1) / j);
                    if (curNCr > targetK) {
                        curNCr = targetK + 1;
                        break;
                    }
                }
                ways *= curNCr;
                if (ways > targetK) return targetK + 1;
            }
        }
        return ways;
    };
    
    if (getWays(half, k) < k) {
        return "";
    }
    
    let firstHalf = "";
    for (let i = 0; i < m; i++) {
        for (let c = 0; c < 26; c++) {
            if (half[c] > 0) {
                half[c]--;
                const ways = getWays(half, k);
                
                if (ways >= k) {
                    firstHalf += String.fromCharCode(c + 97);
                    break;
                } else {
                    k -= ways;
                    half[c]++;
                }
            }
        }
    }
    
    return firstHalf + mid + firstHalf.split("").reverse().join("");
};