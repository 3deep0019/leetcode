/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    if(sentence.length < 26) return false

    const aplhabetSet = new Set(sentence)
    return aplhabetSet.size == 26 ? true: false
};