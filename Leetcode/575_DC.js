/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let candySetsize = new Set(candyType).size;
    return Math.min(candySetsize, candyType.length / 2)
};

console.log(distributeCandies([1,1,2,2,3,3]));