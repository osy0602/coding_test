/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let answer = 0;
    let origin = [...heights];
    for(let i =0;i<heights.length-1;i++){
        for(let j = i;j<heights.length;j++){
            if(heights[i] > heights[j]){
                let tmp = heights[i];
                heights[i] = heights[j];
                heights[j] = tmp;
            }
        }
    }
    for(let i = 0;i<heights.length;i++){
        if (origin[i] !== heights[i]){
            answer +=1;
        }
    }
    return answer;
    
};

console.log(heightChecker([1,1,4,2,1,3]));