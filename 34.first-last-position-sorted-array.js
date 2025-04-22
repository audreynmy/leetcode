var searchRange = function (nums, target) {
  //needs to run 2 times binary search to find leftmost and rightmost index
  //if leftBias === true, search will continue to left of array to find leftmost index where left = right = mid
  const binarySearch = (leftBias) => {
    let left = 0,
      right = nums.length - 1;
    let i = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (target > nums[mid]) {
        left = mid + 1;
      } else if (target < nums[mid]) {
        right = mid - 1;
      } else if (target === nums[mid]) {
        i = mid;
        if (leftBias) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
    }
    return i;
  };
  const leftIndex = binarySearch(true);
  const rightIndex = binarySearch(false);

  return [leftIndex, rightIndex];
};
