//O(n) time complexity, maximum two passes of n
//O(n) space complexity, store string as array
var pushDominoes = function (dominoes) {
  let lastLeft = -1;
  let lastRight = -1;
  const arr = dominoes.split("");

  for (let i = 0; i < arr.length; i++) {
    const c = arr[i];
    if (c === "R") {
      if (lastRight !== -1) {
        for (let j = lastRight + 1; j < i; j++) {
          arr[j] = "R";
        }
      }
      lastRight = i;
    } else if (c === "L") {
      if (lastRight === -1) {
        for (let j = lastLeft + 1; j < i; j++) {
          arr[j] = "L";
        }
      } else {
        let l = lastRight + 1;
        let r = i - 1;
        while (r > l) {
          arr[l++] = "R";
          arr[r--] = "L";
        }
        lastRight = -1;
      }
      lastLeft = i;
    }
  }

  if (lastRight !== -1) {
    for (let i = lastRight + 1; i < arr.length; i++) {
      arr[i] = "R";
    }
  }

  return arr.join("");
};
