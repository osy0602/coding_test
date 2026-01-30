/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let present = 3;
    if(n === 1){
        return true;
    }
    while(present <= n){
        if(present === n){
            return true;
        }
        present *= 3;
    }
    return false;
    
};

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(-1));