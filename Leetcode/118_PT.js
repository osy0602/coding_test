/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    let pascal = [[1]]
    if(numRows === 0){
        return [];
    }
    for(let i = 1;i<numRows;i++){
        let prev = pascal[i-1];
        let current = [];

        current.push(1);

        for(let j = 1;j<prev.length;j++){
            current.push(prev[j-1] + prev[j]);
        }

        current.push(1);
        pascal.push(current);
    }

    return pascal;
};

console.log(generate(5));