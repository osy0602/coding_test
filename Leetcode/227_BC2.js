/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    s = s.trim();
    let stack = [];
    let currentNumber = 0;
    let operation = '+';

    for (let i = 0; i < s.length; i++) {
        let currentChar = s[i];

        if (isDigit(currentChar)) {
            currentNumber = (currentNumber * 10) + parseInt(currentChar, 10);
        }

        if (!isDigit(currentChar) && currentChar !== ' ' || i === s.length - 1) {
            if (operation === '+') {
                stack.push(currentNumber);
            } else if (operation === '-') {
                stack.push(-currentNumber);
            } else if (operation === '*') {
                stack.push(stack.pop() * currentNumber);
            } else if (operation === '/') {
                stack.push(Math.trunc(stack.pop() / currentNumber));
            }
            operation = currentChar;
            currentNumber = 0;
        }
    }

    let result = 0;
    while (stack.length > 0) {
        result += stack.pop();
    }

    return result;
};

function isDigit(char) {
    return !isNaN(char) && char !== ' ';
}

console.log(calculate("3+2*2"));