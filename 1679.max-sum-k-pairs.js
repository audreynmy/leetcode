//O(nlogn) due to sort operation
var maxOperations = function (nums, k) {
  let count = 0;
  let left = 0;
  let right = nums.length - 1;
  nums.sort((a, b) => a - b);
  while (right > left) {
    const sum = nums[right] + nums[left];
    if (sum === k) {
      count++;
      left++;
      right--;
    } else if (sum > k) {
      right--;
    } else {
      left++;
    }
  }
  return count;
};
