/**
 * @param {number} n
 * @param {number[][]} logs
 * @param {number} x
 * @param {number[]} queries
 * @return {number[]}
 */
var countServers = function(n, logs, x, queries) {
    logs.sort((a, b) => a[1] - b[1]);
    logs.push([0, Infinity]);
    const cnt = new Int32Array(n + 1);
    const ans = new Array(queries.length);
    let busy = 0, lo = 0, hi = 0;
    for (const i of [...queries.keys()].sort((i, j) => queries[i] - queries[j])) {
        const q = queries[i];
        for (; logs[hi][1] <= q; hi++) busy += cnt[logs[hi][0]]++ === 0;
        for (; logs[lo][1] < q - x; lo++) busy -= --cnt[logs[lo][0]] === 0;
        ans[i] = n - busy;
    }
    return ans;
};