/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if (num === 0) {
        return "0";
    }

    let isNegative = num < 0;
    let absoluteNum = Math.abs(num);
    let result = "";

    while (absoluteNum > 0) {
        result = (absoluteNum % 7) + result;
        absoluteNum = Math.floor(absoluteNum / 7);
    }

    return isNegative ? "-" + result : result;
};

console.log(convertToBase7(100));