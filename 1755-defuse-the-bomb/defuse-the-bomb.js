/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    let n = code.length;
  let result = new Array(n).fill(0);

  if (k === 0) return result;

  let window = Math.abs(k);
  let sum = 0;

  let start = k > 0 ? 1 : n - window;
  let end = k > 0 ? window : n - 1;

  for (let i = start; i <= end; i++) {
    sum += code[i % n];
  }

  for (let i = 0; i < n; i++) {
    result[i] = sum;

    sum -= code[start % n];
    start++;

    end++;
    sum += code[end % n];
  }

  return result;
};