var findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (right >= left) {
    const mid = Math.floor((left + right) / 2);
    //nums[mid+1] undefined means you are at the end of the array, and nums[mid] is larger.
    //so binary search should limit it to right = mid - 1
    if (nums[mid] > nums[mid + 1] || nums[mid + 1] === undefined) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
