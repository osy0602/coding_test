/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    let memo = {};

    function solve(calc) {
    if (memo[calc]) return memo[calc];

    let results = [];

    for (let i = 0; i < calc.length; i++) {
      let char = calc[i];

      if (char === '+' || char === '-' || char === '*') {
        let left  = diffWaysToCompute(calc.slice(0, i));
        let right = diffWaysToCompute(calc.slice(i + 1));
        for (let l of left) {
          for (let r of right) {
            if (char === '+') results.push(l + r);
            if (char === '-') results.push(l - r);
            if (char === '*') results.push(l * r);
          }
        }
      }
    }

    if (results.length === 0) results.push(Number(calc));

    memo[calc] = results;
    return results;
  }

  return solve(expression);
};

console.log(diffWaysToCompute("2-1-1"));