/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    let total = 0;
    const n = customers.length;
    for (let i = 0; i < n; i++) {
        if (!grumpy[i]) {
        total += customers[i];
        }
    }

    let notSatisfy = 0;
    for (let i = 0; i < minutes; i++) {
        if (grumpy[i]) {
        notSatisfy += customers[i];
        }
    }

    let maxSatisfy = notSatisfy;
    for (let i = minutes; i < n; i++) {
        if (grumpy[i] == 1) {
        notSatisfy += customers[i];
        }

        if (grumpy[i - minutes] == 1) {
        notSatisfy -= customers[i - minutes];
        }

        maxSatisfy = Math.max(maxSatisfy, notSatisfy);
    }

    return total + maxSatisfy;
};