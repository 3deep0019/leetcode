/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const uniqSorted = [...new Set(arr)].sort((a, b) => a - b);
    const rankMap = new Map();
    uniqSorted.forEach((v, i) => rankMap.set(v, i + 1))
    return arr.map(v => rankMap.get(v));
};