/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    let num1 = Math.abs(z-x);
    let num2 = Math.abs(z-y);
    if(num1 === num2)
        return 0;
    else if(num1 < num2)
        return 1;
    else
        return 2;
};

console.log(findClosest(2,7,4));