var isSubsequence = function (s, t) {
  let j = 0;
  for (const char of t) {
    if (char === s[j]) {
      j++;
    }
  }
  return j === s.length;
};
