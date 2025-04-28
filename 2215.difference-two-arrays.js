//need to create two unique sets to compare the distinct values between nums1 and nums2
var findDifference = function (nums1, nums2) {
  const nums1set = new Set(nums1);
  const nums2set = new Set(nums2);
  const distinct1 = [],
    distinct2 = [];
  for (const num of nums1set) {
    if (!nums2set.has(num)) {
      distinct1.push(num);
    }
  }

  for (const num of nums2set) {
    if (!nums1set.has(num)) {
      distinct2.push(num);
    }
  }
  return [distinct1, distinct2];
};
