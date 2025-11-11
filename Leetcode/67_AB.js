/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length-1;
    let j = b.length-1;
    let result = "";
    let rest = 0;

    while( i >= 0 || j >= 0 || rest >0){
        let bitA = i >= 0 ? Number(a[i]) : 0
        let bitB = j >= 0 ? Number(b[j]) : 0
        let sum = bitA + bitB + rest;

        result = String(sum % 2) + result;
        rest = Math.floor(sum / 2);
        i--;
        j--;
    }
    return result;
};

console.log(addBinary("11","1"));