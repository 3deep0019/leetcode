/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    const res = [];
    const n = seq.length;

    for (let i = 0; i < n; i++)
        res.push((i ^ seq.charCodeAt(i)) & 1);

    return res;
};