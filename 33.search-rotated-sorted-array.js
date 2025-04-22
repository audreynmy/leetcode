var search = function (nums, target) {
  //nums is a sorted array, return the index where nums[i] === target
  //for log(n) solution, will require a binary search with 3 pointers - left, right and mid.
  //i.e. 56789 123
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    //case where the mid actually is the target, return the index
    if (target === nums[mid]) {
      return mid;
    }
    //left sorted array
    if (nums[mid] >= nums[left]) {
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } //right sorted array
    else {
      if (target <= nums[right] && target > nums[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
};
