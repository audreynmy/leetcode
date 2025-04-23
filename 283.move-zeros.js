var moveZeroes = function (nums) {
  //[0,1,0,3,4,5,6,0]
  //swap positions if non-zero value encountered
  //O(n) time complexity
  let l = 0,
    r = 0;
  while (r < nums.length) {
    if (nums[r] !== 0) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
      l++;
    }
    r++;
  }
};
