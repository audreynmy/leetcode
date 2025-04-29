var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }
  let arr = new Array(numRows).fill().map(() => []);
  let d = 0,
    idx = 0;
  for (let i = 0; i < s.length; i++) {
    arr[idx].push(s[i]);
    if (idx === 0) {
      d = 1;
    }
    if (idx === numRows - 1) {
      d = -1;
    }
    idx += d;
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].join("");
  }
  return arr.join("");
};
