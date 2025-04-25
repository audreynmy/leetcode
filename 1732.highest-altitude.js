//One pass, prefix sum
var largestAltitude = function (gain) {
  let maxAlt = 0;
  let totalGain = 0;
  for (const currGain of gain) {
    totalGain += currGain;
    maxAlt = Math.max(maxAlt, totalGain);
  }
  return maxAlt;
};
