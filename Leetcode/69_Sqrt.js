/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) {
        return x;
    }

    let left = 0;
    let right = x;
    let answer = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        let midSquared = mid * mid;

        if (midSquared === x) {
            return mid;
        } else if (midSquared < x) {
            answer = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return answer;
};
console.log(mySqrt(4));
console.log(mySqrt(8));