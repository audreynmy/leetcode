var asteroidCollision = function (asteroids) {
  let res = [];
  for (let curr of asteroids) {
    while (res.length && res.at(-1) > 0 && curr < 0) {
      //the last asteroid in stack will take over
      if (Math.abs(res.at(-1)) > Math.abs(curr)) {
        curr = 0;
      } else if (Math.abs(res.at(-1)) < Math.abs(curr)) {
        //the current asteroid will take over
        res.pop();
      } else {
        //both asteroids will explode
        res.pop();
        curr = 0;
      }
    }
    if (curr) {
      res.push(curr);
    }
  }
  return res;
};
