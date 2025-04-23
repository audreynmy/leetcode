var gcdOfStrings = function (str1, str2) {
  // ABCABC, ABC
  // starting from the largest substring and slowly decrement by 1,
  // find the GCD string that can be multiplied to create str1 and str2
  // use the shorter string to find the GCD

  // O(min(m,n))*(m+n) complexity - must use the minimum length of str1, str2,
  // and worst case scenario where i=1, to repeat 1*m times to create str1, and 1*n times to create str2

  const gcdLen = Math.min(str1.length, str2.length);
  for (let i = gcdLen; i >= 1; i--) {
    //has no remainder, means repeating GCD can potentially recreate str1 and str2
    if (str1.length % i === 0 && str2.length % i === 0) {
      const gcdStr = str1.substring(0, i);
      const repeatTimes1 = str1.length / i;
      const repeatTimes2 = str2.length / i;
      if (
        str1 === gcdStr.repeat(repeatTimes1) &&
        str2 === gcdStr.repeat(repeatTimes2)
      ) {
        return gcdStr;
      }
    }
  }

  return "";
};
