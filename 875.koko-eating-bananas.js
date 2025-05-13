var minEatingSpeed = function (piles, h) {
  let left = 1;
  let right = Math.max(...piles);
  while (right >= left) {
    let mid = Math.floor((left + right) / 2);
    let total = 0;
    for (const pile of piles) {
      total += Math.ceil(pile / mid);
    }
    if (total > h) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

/*
Q: why is koko eating bananas a binary search problem?
A: example, [3,6,7,11], h=8. if 4bananas/hr works, 5,6,7,8bananas/hr would work as well.
we need to find the minimum value of k (bananas/hr) where the algo works.
*/
