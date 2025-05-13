var compress = function (chars) {
  let idx = 0;
  let currChar = "";

  for (let i = 0; i < chars.length; i++) {
    let count = 0;
    currChar = chars[i];
    while (chars[i] === currChar) {
      count++;
      i++;
    }
    if (count === 1) {
      chars[idx++] = currChar;
    } else {
      chars[idx++] = currChar;
      for (const char of count.toString()) {
        chars[idx++] = char;
      }
    }

    i--;
  }
  return idx;
};
