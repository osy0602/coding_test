/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;

    let carry = 0;
    let result = [];

    while(i>=0||j>=0||carry){
        let digit1 = i >= 0 ? parseInt(num1[i]) : 0;
        let digit2 = j >= 0 ? parseInt(num2[j]) : 0;
        let sum = digit1 + digit2 + carry;
        carry = Math.floor(sum / 10);

        result.push(sum%10);
        i--;
        j--;
    }
    return result.reverse().join('');
}
console.log(addStrings("11","123"));