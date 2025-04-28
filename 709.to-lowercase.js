var toLowerCase = function (s) {
  //String.fromCharCode returns the string from ASCII character code
  //s.charCodeAt(index) gives the ASCII value of the character at the index
  return s
    .split("")
    .map((char) => {
      if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
        char = String.fromCharCode(char.charCodeAt(0) + 32);
      }
      return char;
    })
    .join("");
};
