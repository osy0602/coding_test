/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex === 0){
        return [1];
    }
    let lastrow = [1];

    for(let i =1;i<=rowIndex;i++){
        lastrow.push(1);
        for(let j = i -1;j>0;j--){
            lastrow[j] = lastrow[j] + lastrow[j-1];
        }
    }

    return lastrow;
};

console.log(getRow(3));