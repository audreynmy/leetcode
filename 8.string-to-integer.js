function myAtoi(s) {
  let i = 0;
  let sign = 1;
  let result = 0;
  while (s[i] === " ") {
    i++;
  }

  while (s[i] === "-" || s[i] === "+") {
    sign = s[i] === "-" ? -1 : 1;
    i++;
  }

  while (
    s[i] &&
    s[i].charCodeAt(0) >= "0".charCodeAt(0) &&
    s[i].charCodeAt(0) <= "9".charCodeAt(0)
  ) {
    result = 10 * result + parseInt(s[i]);
    if (result * sign > 2 ** 31 - 1) return 2 ** 31 - 1;
    if (result * sign < -(2 ** 31)) return -(2 ** 31);
    i++;
  }

  return result * sign;
}
