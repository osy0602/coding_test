/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if(num <= 1){
        return false;
    }
    let divsum = 1;

    for(let i = 2;i*i <= num; i++){
        if(num % i === 0){
            divsum += i;
            if(i*i !== num){
                divsum += num / i;
            }
        }
    }
    return divsum === num;
};

console.log(checkPerfectNumber(28));