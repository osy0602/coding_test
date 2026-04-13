/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

 //To avoid Time Limit Exceeded instead of subtracting 1 by 1, 
 //Subtract large chunks using powers of 2 (doubling the divisor).

var divide = function(dividend, divisor) {
    const MAX = 2147483647;
    const MIN = -2147483648;
    if (dividend === MIN && divisor === -1) return MAX;

    //for final sign
    const isNegative = (dividend < 0) !== (divisor < 0);

    //making absolute number
    let a = Math.abs(dividend);
    let b = Math.abs(divisor);
    let res = 0;

    while (a >= b) {
        let temp = b, multiple = 1;
        //Calculate this number by doubling it
        while (a >= (temp * 2) && temp * 2 > 0) {
            temp *= 2;
            multiple *= 2;
        }
        a -= temp;
        res += multiple;
    }

    return isNegative ? -res : res;
};

console.log(divide(10, 3));