//sliding window, O(n) complexity
var maxVowels = function (s, k) {
  let maxCount = 0;
  let currCount = 0;
  let vowels = new Set(["a", "e", "i", "o", "u"]);

  //first pass to get count in first window
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      currCount++;
    }
  }
  maxCount = currCount;
  //second pass to slide the window to find maxCount
  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i - k])) {
      currCount--;
    }
    if (vowels.has(s[i])) {
      currCount++;
    }
    maxCount = Math.max(maxCount, currCount);
  }

  return maxCount;
};
