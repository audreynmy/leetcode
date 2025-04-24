//O(n) time complexity, for loop. O(n) space complexity
var reverseVowels = function (s) {
  const vowelList = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  const vowelsInS = [];
  // first pass to push all vowels into array
  for (const char of s) {
    if (vowelList.includes(char)) {
      vowelsInS.push(char);
    }
  }
  vowelsInS.reverse();
  let index = 0;
  // second pass to replace the vowels with reversed array values
  const sArr = s.split("");
  for (let i = 0; i < sArr.length; i++) {
    if (vowelList.includes(sArr[i])) {
      sArr[i] = vowelsInS[index];
      index++;
    }
  }
  return sArr.join("");
};

//alternative 2 pointer solution
//O(n) time complexity, O(n) space complexity
var reverseVowels = function (s) {
  const vowelSet = new Set(["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]);
  let left = 0;
  let right = s.length - 1;
  const strArr = s.split("");

  while (right > left) {
    if (!vowelSet.has(strArr[left])) left++;
    if (!vowelSet.has(strArr[right])) right--;
    if (vowelSet.has(strArr[left]) && vowelSet.has(strArr[right])) {
      [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
      right--;
      left++;
    }
  }
  return strArr.join("");
};
