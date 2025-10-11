/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let xstr = x.toString();
    let numlist = xstr.split("");
    let answer = "";
    if(numlist[0] === "-"){
        answer += "-";
        numlist.shift();
    }
    for(let i =numlist.length-1;i>=0;i--){
        answer += numlist[i];
    }
    let returnnum = parseInt(answer);
    if((returnnum | 0) === returnnum)
        return returnnum;
    else
        return 0;
};
console.log(reverse(321));
console.log(reverse(-321));