/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let left = 1;
    let right = n;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let currentTotalCoins = Number((mid * (mid + 1)) / 2); 
        
        if (currentTotalCoins === n) {
            return mid;
        } else if (currentTotalCoins < n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
};

console.log(arrangeCoins(5));