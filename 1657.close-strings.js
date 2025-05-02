//kind of a trick question, the first requirement means, the strings must have the same characters.
//second requirement means, the frequencies of each character in each string, when sorted, must match.
//i.e. [aaabbcc] = 3,2,2. [bbbaacc] = 3,2,2.
var closeStrings = function (word1, word2) {
  //need to count the frequencies of each character in each word.
  let freq1 = new Array(26).fill(0);
  let freq2 = new Array(26).fill(0);

  for (const char of word1) {
    freq1[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  for (const char of word2) {
    freq2[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  for (let i = 0; i < 26; i++) {
    if ((freq1[i] > 0 && freq2[i] === 0) || (freq2[i] > 0 && freq1[i] === 0)) {
      return false;
    }
  }

  freq1.sort((a, b) => a - b);
  freq2.sort((a, b) => a - b);

  for (let i = 0; i < 26; i++) {
    if (freq1[i] !== freq2[i]) {
      return false;
    }
  }
  return true;
};
