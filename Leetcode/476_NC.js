/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let numBits = num.toString(2).length;
    let mask = 2 ** numBits - 1;
    return num ^ mask;
};

console.log(findComplement(5));