/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b);
    
    let minDiff = Infinity;
    let answer = [];

    for (let i = 0; i < arr.length - 1; i++) {
        let currentDiff = arr[i+1] - arr[i];

        if (currentDiff < minDiff) {
            minDiff = currentDiff;
         answer = [[arr[i], arr[i+1]]];
        } else if (currentDiff === minDiff) {
         answer.push([arr[i], arr[i+1]]);
        }
    }

    return answer;
};

console.log(minimumAbsDifference([4,2,1,3]));