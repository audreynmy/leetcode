//sliding window algorithm, O(n) time, space complexity
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  const strSet = new Set();
  let max = 0;

  for (let right = 0; right < s.length; right++) {
    while (strSet.has(s[right])) {
      strSet.delete(s[left++]);
    }
    strSet.add(s[right]);
    max = Math.max(max, right - left + 1);
  }

  return max;
};
