var maxArea = function (height) {
  let left = 0,
    right = height.length - 1;
  let max = 0;
  while (right > left) {
    max = Math.max(max, (right - left) * Math.min(height[left], height[right]));
    height[right] > height[left] ? left++ : right--;
  }
  return max;
};
