var pivotIndex = function (nums) {
  let leftTotal = 0;
  const total = nums.reduce((a, b) => a + b);
  for (let i = 0; i < nums.length; i++) {
    const rightTotal = total - leftTotal - nums[i];
    if (leftTotal === rightTotal) {
      return i;
    }
    leftTotal += nums[i];
  }
  return -1;
};
