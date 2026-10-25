/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    const m = grid.length, n = grid[0].length;
    const closed = (i, j) => { 
        if (i < 0 || i >= m || j < 0 || j >= n) return 0;
        if (grid[i][j]) return 1;
        grid[i][j] = 1;
        return closed(i + 1, j) & closed(i - 1, j) & closed(i, j + 1) & closed(i, j - 1);
    };
    let count = 0;
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
            if (!grid[i][j]) count += closed(i, j);
    return count;
};