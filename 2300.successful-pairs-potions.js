//O(m+nlog(m)) time complexity
var successfulPairs = function (spells, potions, success) {
  let pairs = [];
  //O(mlog(m))
  potions.sort((a, b) => a - b);

  //O(nlog(m))
  for (const spell of spells) {
    let left = 0;
    let right = potions.length - 1;
    let count = 0;

    while (right >= left) {
      const mid = Math.floor((right + left) / 2);
      if (spell * potions[mid] >= success) {
        count = potions.length - mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    pairs.push(count);
  }

  return pairs;
};
