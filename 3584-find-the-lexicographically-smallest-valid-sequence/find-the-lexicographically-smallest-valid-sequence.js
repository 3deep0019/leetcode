/**
 * @param {string} word1
 * @param {string} word2
 * @return {number[]}
 */
var validSequence = function(word1, word2) {
    const n = word1.length;
    const m = word2.length;
    
    const suffix = new Array(n + 1).fill(0);
    
    let j = m - 1;
    for (let i = n - 1; i >= 0; i--) {
        if (j >= 0 && word1[i] === word2[j]) {
            j--;
        }
        suffix[i] = m - 1 - j;
    }
    
    const result = [];
    let w2Idx = 0;
    let changed = false; 
    for (let w1Idx = 0; w1Idx < n; w1Idx++) {
        if (w2Idx === m) break;
        
        if (word1[w1Idx] === word2[w2Idx]) {
            result.push(w1Idx);
            w2Idx++;
        } 
        else if (!changed && (suffix[w1Idx + 1] >= m - 1 - w2Idx)) {
            result.push(w1Idx);
            w2Idx++;
            changed = true; 
        }
    }
    
    return result.length === m ? result : [];
};