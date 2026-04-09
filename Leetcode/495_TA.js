/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    if (timeSeries.length === 0) {
        return 0;
    }
    let totalPoisonedTime = 0;
    
    for (let i = 0; i < timeSeries.length - 1; i++) {
        totalPoisonedTime += Math.min(timeSeries[i + 1] - timeSeries[i], duration);
    }
    
    return totalPoisonedTime + duration;
};

console.log(findPoisonedDuration([1,4],2))