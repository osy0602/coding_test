/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while(stones.length > 1){
        stones.sort((a,b) => a - b);

        let one = stones.pop();
        let two = stones.pop();

        if(one !== two){
            stones.push(one - two);
        }
    }
    return stones.length === 1 ? stones[0] : 0;
};

console.log(lastStoneWeight([2,7,8,4,1,8,1]));