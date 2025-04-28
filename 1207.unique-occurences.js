//O(n) time complexity, O(n) space complexity
var uniqueOccurrences = function (arr) {
  const map = new Map();
  const set = new Set();

  for (const val of arr) {
    map.set(val, map.get(val) ? map.get(val) + 1 : 1);
  }
  for (const [key, val] of map) {
    set.add(val);
  }

  return set.size === map.size;
};
