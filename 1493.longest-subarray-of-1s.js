//sliding window algorithm, O(n) time complexity
var longestSubarray = function (nums) {
  let left = 0;
  let longest = 0;
  let zeros = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeros++;
    }
    while (zeros > 1) {
      if (nums[left] === 0) {
        zeros--;
      }
      left++;
    }

    longest = Math.max(longest, right - left);
  }

  return longest;
};
