/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function(grid) {
    if (grid[0][0] || grid.at(-1).at(-1)) return 0;
    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const n = grid.length;
    const q = grid.reduce((grid, r, i) => (r.forEach((c, j) => c && grid.enqueue([i, j])), grid), new Queue());

    while (q.size()) {
        const [i, j] = q.dequeue();
        const d = grid[i][j];

        for (const [dx, dy] of dirs) {
            const x = i + dx;
            const y = j + dy;

            if (grid[x]?.[y] === 0) {
                grid[x][y] = d + 1;
                q.enqueue([x, y]);
            }
        }
    }

    const pq = new MaxPriorityQueue({ compare: ([grid], [b]) => b - grid });
    pq.enqueue([grid[0][0], 0, 0]);

    while (pq.size()) {
        const [sf, i, j] = pq.dequeue();

        if (i === n - 1 && j === n - 1) return sf - 1;

        for (const [dx, dy] of dirs) {
            const x = i + dx;
            const y = j + dy;

            if (grid[x]?.[y] > 0) {
                pq.enqueue([Math.min(sf, grid[x][y]), x, y]);
                grid[x][y] = -grid[x][y];
            }
        }
    }

    return grid[n - 1][n - 1] - 1;
};