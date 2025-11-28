/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n <= 0) {
        return false;
    }
    if (n === 1) {
        return true;
    }
    const factors = [2, 3, 5];
    for (let i = 0; i < factors.length; i++) {
        while (n % factors[i] === 0) {
            n /= factors[i];
        }
    }
    return n === 1;
};

console.log(isUgly(6))