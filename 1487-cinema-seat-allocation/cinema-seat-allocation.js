/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
    const rows = new Map();

    for (const [row, col] of reservedSeats) {
        if (col >= 2 && col <= 9) {
            const currentMask = rows.get(row) || 0;

            rows.set(row, currentMask | (1 << col));
        }
    }

    let answer = 2 * (n - rows.size);

    const left = (1 << 2) | (1 << 3) | (1 << 4) | (1 << 5);
    const middle = (1 << 4) | (1 << 5) | (1 << 6) | (1 << 7);
    const right = (1 << 6) | (1 << 7) | (1 << 8) | (1 << 9);

    for (const mask of rows.values()) {
        const canLeft = (mask & left) === 0;
        const canMiddle = (mask & middle) === 0;
        const canRight = (mask & right) === 0;

        if (canLeft && canRight) {
            answer += 2;
        }
        else if (canLeft || canMiddle || canRight) {
            answer += 1;
        }
    }

    return answer;
};