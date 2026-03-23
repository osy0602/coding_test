/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    let answer = [];

    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            if (countSetBits(h) + countSetBits(m) === turnedOn)     {
                answer.push(`${h}:${m < 10 ? '0' : ''}${m}`);
            }
        }
    }

    return answer;
};

function countSetBits(num) {
    let count = 0;
    while (num > 0) {
        num &= (num - 1);
        count++;
    }
    return count;
}

console.log(readBinaryWatch(1));