/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let result = "1";

    for (let i = 1; i < n; i++) {
        let nextStr = "";
        let count = 1;

        for (let j = 0; j < result.length; j++) {
            if (result[j] === result[j + 1]) {
                count++;
            } else {
                nextStr += count.toString() + result[j];
                count = 1;
            }
        }
        result = nextStr;
    }

    return result;
};

console.log(countAndSay(1));
console.log(countAndSay(2));
console.log(countAndSay(3));