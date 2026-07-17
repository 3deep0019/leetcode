/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var pathExistenceQueries = function(n, nums, maxDiff, queries) {
    const group = new Array(n).fill(0);
    let currentGroup = 0;

    for (let i = 1; i < n; i++) {
        if (nums[i] - nums[i - 1] > maxDiff) {
            currentGroup++;
        }
        group[i] = currentGroup;
    }

    const res = [];
    for (const [u, v] of queries) {
        res.push(group[u] === group[v]);
    }

    return res;
};