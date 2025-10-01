/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxnum = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const width = right - left;
        const currentHeight = Math.min(height[left], height[right]);
        
        const square = width * currentHeight;
        maxnum = Math.max(maxnum, square);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxnum;
    
};

console.log(maxArea(height = [1,8,6,2,5,4,8,3,7]))