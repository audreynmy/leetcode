var combinationSum = function (candidates, target) {
  const res = [];
  const backtrack = (i, curr, total) => {
    if (target === total) {
      res.push([...curr]);
      return;
    }
    if (total > target || i === candidates.length) {
      return;
    }
    curr.push(candidates[i]);
    backtrack(i, curr, total + candidates[i]);
    curr.pop();
    backtrack(i + 1, curr, total);
  };

  backtrack(0, [], 0);
  return res;
};
