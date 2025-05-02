//requires two passes of the array to calculate for the product to the left side of index, and right side of index.
//i.e. [3,4,[5],6,7,8,9] for index 2 (value 5): first pass makes answer 3*4=12, second pass makes answer 12*6*7*8*9
var productExceptSelf = function (nums) {
  let answer = new Array(nums.length).fill(1);

  //requires left to track the left side product
  let left = 1;
  for (let i = 0; i < nums.length; i++) {
    answer[i] = left;
    left *= nums[i];
  }

  //requires right to track the right side product, starts from last element of array
  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] *= right;
    right *= nums[i];
  }
  return answer;
};
