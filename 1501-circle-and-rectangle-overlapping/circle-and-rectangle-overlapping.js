/**
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var checkOverlap = function(radius, xCenter, yCenter, x1, y1, x2, y2) {
    const { max, min } = Math;
    const x = max(x1, min(xCenter, x2)) - xCenter;
    const y = max(y1, min(yCenter, y2)) - yCenter;

    return x * x + y * y <= radius * radius;
};