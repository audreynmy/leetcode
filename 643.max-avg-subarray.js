//sliding window, O(n) time complexity
var findMaxAverage = function (nums, k) {
  let sum = 0;
  let maxAvg = -Infinity;

  //first loop to get sum of first k elements
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  maxAvg = sum / k;

  //second loop to get maxAvg
  for (let i = 1; i <= nums.length - k; i++) {
    sum = sum + nums[i - 1] + nums[i + k - 1];
    avg = sum / k;
    maxAvg = Math.max(avg, maxAvg);
  }
  return maxAvg;
};
