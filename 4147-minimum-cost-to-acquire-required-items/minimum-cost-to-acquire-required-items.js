/**
 * @param {number} cost1
 * @param {number} cost2
 * @param {number} costBoth
 * @param {number} need1
 * @param {number} need2
 * @return {number}
 */
var minimumCost = function(cost1, cost2, costBoth, need1, need2) {
    const bound = (needA, costA, needB, costB) => {
        const pA = Math.min(costA, costBoth);  // a takes its full price
        const pB = Math.min(costB, costBoth - pA);  // b gets what's left of the bundle
        return needA * pA + needB * pB;
    };
    return Math.max(bound(need1, cost1, need2, cost2), bound(need2, cost2, need1, cost1));
};