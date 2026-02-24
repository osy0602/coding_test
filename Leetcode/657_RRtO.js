/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let position = [0,0];
    for(m of moves){
        if(m === "U"){
            position[1]--;
        }
        else if(m==="D"){
            position[1]++;
        }
        else if(m==="L"){
            position[0]--;
        }
        else{
            position[0]++;
        }
    }
    if(position[0] === 0 && position[1]===0){
        return true;
    }
    else {return false;}
};

console.log(judgeCircle("UD"));