/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function(grid) {
    const m = grid.length, n = grid[0].length;
    const dp = Array.from({ length: n }, () => new Set());

    dp[0].add(grid[0][0]);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!i && !j) continue;

            const prev = new Set();

            (i ? dp[j] : []).forEach(c => prev.add(c));
            (dp[j - 1] ?? []).forEach(c => prev.add(c));

            dp[j] = new Set([...prev].map(c => c ^ grid[i][j]));
        }
    }

    return [...dp[n - 1]].reduce((a, c) => Math.min(a, c));
};