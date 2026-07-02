/**
 * @param {number[][]} grid
 * @param {number} health
 * @return {boolean}
 */
var findSafeWalk = function(grid, health) {
    const m = grid.length;
    const n = grid[0].length;

    const dist = Array.from({ length: m }, () => Array(n).fill(Infinity));

    const deque = [];
    let head = 0;

    dist[0][0] = grid[0][0];
    deque.push([0, 0]);

    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    while (head < deque.length) {
        const [x, y] = deque[head++];

        for (let k = 0; k < 4; k++) {
            const nx = x + dx[k];
            const ny = y + dy[k];

            if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;

            const newCost = dist[x][y] + grid[nx][ny];

            if (newCost < dist[nx][ny]) {
                dist[nx][ny] = newCost;

                if (grid[nx][ny] === 0) {
                    deque.splice(head, 0, [nx, ny]);
                } else {
                    deque.push([nx, ny]);
                }
            }
        }
    }

    return dist[m - 1][n - 1] < health;
};