var decodeString = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "]") {
      stack.push(s[i]);
    } else {
      let str = "";
      let digits = "";

      while (stack.at(-1) !== "[") {
        str = stack.pop() + str;
      }
      stack.pop();
      while (!isNaN(stack.at(-1))) {
        digits = stack.pop() + digits;
      }
      stack.push(str.repeat(parseInt(digits)));
    }
  }

  return stack.join("");
};
