//requires stack, O(n) time complexity, O(n) space complexity
var removeStars = function (s) {
  let stack = [];
  for (const char of s) {
    if (char === "*") {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
};
