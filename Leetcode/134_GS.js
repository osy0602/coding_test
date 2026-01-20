/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let total_cost = 0;
    let current_cost = 0;
    let start = 0;
    for(let i =0;i<gas.length;i++){
        let diff = gas[i] - cost[i];
        total_cost += diff;
        current_cost += diff;

        if(current_cost < 0){
            start = i + 1;
            current_cost = 0;
        }
    }
    return total_cost >= 0 ? start : -1;
};
console.log(canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2]));