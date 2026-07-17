/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    const n = nums.length;
  if (n < k) return 0;

  const freq = new Map();
  let windowSum = 0;
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
    freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
  }

  if (freq.size === k) {
    maxSum = windowSum;
  }

  for (let i = k; i < n; i++) {
    const outgoing = nums[i - k];
    const incoming = nums[i];

    windowSum -= outgoing;
    freq.set(outgoing, freq.get(outgoing) - 1);

    if (freq.get(outgoing) === 0) {
      freq.delete(outgoing);
    }

    windowSum += incoming;
    freq.set(incoming, (freq.get(incoming) || 0) + 1);

    if (freq.size === k) {
      maxSum = Math.max(maxSum, windowSum);
    }
  }

  return maxSum;
};