/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if (num === 0) return "0";

    let chars = "0123456789abcdef";
    let answer = "";
    let tmp = num >>> 0; 

    while (tmp !== 0) {
        let digit = tmp & 0xf;
        answer = chars[digit] + answer;
        tmp >>>= 4;
    }

    return answer;
};

console.log(toHex(26));