/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    total += (123 - s.charCodeAt(i)) * (i + 1);
  }
  return total;
};