/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let charMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (!charMap[char]) {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack.pop() !== charMap[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

console.log(isValid("([])"));
console.log(isValid("([)]"));