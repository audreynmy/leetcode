/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 **/

var sortedArrayToBST = function (nums) {
  // base case
  if (nums.length === 0) return null;

  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);

  // recursively build left and right subtrees
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  return root;
};
// Example usage
const nums = [-10, -3, 0, 5, 9];
const result = sortedArrayToBST(nums);
console.log(result);
