var mergeAlternately = function (word1, word2) {
  let res = [];
  const word1Arr = word1.split("");
  const word2Arr = word2.split("");
  const len = Math.max(word1Arr.length, word2Arr.length);
  for (let i = 0; i < len; i++) {
    if (word1Arr[i]) {
      res.push(word1Arr[i]);
    }
    if (word2Arr[i]) {
      res.push(word2Arr[i]);
    }
  }
  return res.join("");
};
