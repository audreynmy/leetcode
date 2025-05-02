//sliding window algorithm
//O(n)
var longestOnes = function (nums, k) {
  let maxLen = 0;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      k--;
    }
    while (k < 0) {
      if (nums[left] === 0) {
        k++;
      }
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
};
