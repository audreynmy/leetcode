var reverseWords = function (s) {
  return s
    .trim()
    .split(" ")
    .filter((word) => word.length)
    .reverse()
    .join(" ");
};
