var generateParentheses = function (n) {
  //requires backtracking
  const res = [];

  //number of open parentheses '(', number of closed parentheses ')', str = i.e. "(())"
  const backtrack = (openNum, closedNum, str) => {
    //base case where openNum = closedNum = n, add the string to results
    if (openNum === closedNum && closedNum === n) {
      res.push(str);
      return;
    }
    //can only add open parentheses if openNum is less than n
    //call backtrack again with the newly appended string
    if (openNum < n) {
      backtrack(openNum + 1, closedNum, str.concat("("));
    }

    //can only add closed parentheses if openNum is greater than closedNum
    // (() - openNum=2, closedNum=1
    if (openNum > closedNum) {
      backtrack(openNum, closedNum + 1, str.concat(")"));
    }
  };
  backtrack(0, 0, "");
  return res;
};
