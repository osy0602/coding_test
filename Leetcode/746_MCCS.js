/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const n = cost.length;
    let prev = 0;
    let curr = 0;

    for (let i = 2; i <= n; i++) {
        const two = prev + cost[i - 2];
        const one = curr + cost[i - 1];
        
        const temp = Math.min(two, one);
        
        prev = curr;
        curr = temp;
    }

    return curr;
};

console.log(minCostClimbingStairs([10,15,20]));