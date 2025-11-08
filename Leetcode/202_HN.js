/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let seenNumbers = new Set();

    while(n!==1 && !seenNumbers.has(n)){
        seenNumbers.add(n);
        let sum = 0;
        let currentNum = n;

        while(currentNum>0){
            let digit = currentNum % 10;
            sum += digit * digit;
            currentNum = Math.floor(currentNum / 10);
        }
        n = sum;
    }
    
    return n ===1;
};

console.log(isHappy(19));
console.log(isHappy(2));