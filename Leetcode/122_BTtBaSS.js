/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let hold = false;
    let buy = 0;
    let answer = 0;
    for(let i = 0;i<prices.length-1;i++){
        if(!hold && prices[i] < prices[i+1]){
            hold = true;
            buy = prices[i]
        }
        else if(hold && (prices[i] > prices[i+1])){
            answer += (prices[i] - buy);
            buy = 0;
            hold = false;
        }
        else if(hold && (prices.length-1 === i+1)){
            answer += (prices[i+1] - buy);
            buy = 0;
            hold = false;
        }
        
    }
    if(hold){
        answer += prices[prices.length-1] - buy;
    }
    return answer;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([1,2,3,4,5]));
console.log(maxProfit([7,6,4,3,1]));