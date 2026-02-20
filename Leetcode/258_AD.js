/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while(num >= 10){
        let tmp = 0;
        String(num).split('').forEach(i =>{
            tmp += parseInt(i, 10);
        });
        num = tmp;
    }
    return num;
};
console.log(addDigits(38));