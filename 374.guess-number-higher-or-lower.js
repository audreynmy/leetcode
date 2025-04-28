var guessNumber = function (n) {
  let left = 1,
    right = n,
    pick = -1;
  while (right >= left) {
    const mid = Math.floor((left + right) / 2);
    const pick = guess(mid);

    if (pick === 1) {
      left = mid + 1;
    } else if (pick === -1) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
};
