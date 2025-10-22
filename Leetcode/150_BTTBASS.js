/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minprice = Infinity;
    let profit = 0;

    for(let i = 0;i<prices.length;i++){
        let current = prices[i];
        if(current < minprice){
            minprice = current;
        }
        else if(current - minprice > profit){
            profit = current - minprice;
        }
    }
    return profit;
};

console.log(maxProfit([7,1,5,3,6,4]));