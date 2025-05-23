var guessNumber = function (n) {
  let left = 1;
  let right = n;
  while (right >= left) {
    let mid = Math.floor((left + right) / 2);
    const ans = guess(mid);
    if (ans === -1) {
      right = mid - 1;
    } else if (ans === 1) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
};
