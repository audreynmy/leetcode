var minimumLevels = function (possible) {
  let total = 0;
  let sum = 0;

  for (let game of possible) {
    total += game === 0 ? -1 : 1;
  }

  for (let i = 0; i < possible.length - 1; i++) {
    sum += possible[i] === 0 ? -1 : 1;
    if (sum > Math.floor(total / 2)) {
      return i + 1;
    }
  }
  return -1;
};
