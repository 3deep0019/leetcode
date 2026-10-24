/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */

var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    const before = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
    for (let m = 1; m < 12; m++) before[m] += before[m - 1]; 
    const day = mmdd => before[Number(mmdd.slice(0, 2)) - 1] + Number(mmdd.slice(3));
    const first = arriveAlice > arriveBob ? arriveAlice : arriveBob;
    const last = leaveAlice < leaveBob ? leaveAlice : leaveBob;
    return Math.max(0, day(last) - day(first) + 1);
};