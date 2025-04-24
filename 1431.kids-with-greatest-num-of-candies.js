var kidsWithCandies = function (candies, extraCandies) {
  let maxCandy = 0;
  let res = [];
  for (const candy of candies) {
    if (candy > maxCandy) {
      maxCandy = candy;
    }
  }

  for (candy of candies) {
    if (candy + extraCandies >= maxCandy) {
      res.push(true);
    } else {
      res.push(false);
    }
  }

  return res;
};
