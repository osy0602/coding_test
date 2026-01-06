/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const scoreArr = score.map((s, i) => [s,i]);
    scoreArr.sort((a, b) => b[0] - a[0]); //0번 기준 내림차순 정렬, a[0] - b[0]이면 오름차순 정렬
    const ranking = new Array(score.length);
    const medal = ["Gold Medal", "Silver Medal","Bronze Medal"];

    for(let i = 0;i<score.length;i++){
        let idx = scoreArr[i][1];
        if(i<3){
            ranking[idx] = medal[i];
        }
        else{
            ranking[idx] = String(i+1);
        }
    }
    return ranking
};

console.log(findRelativeRanks([5,4,3,2,1]));
console.log(findRelativeRanks([10,3,8,9,4]));