/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let maxArea = 0.0;
    let n = points.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                let area = Math.abs(
                    points[i][0] * (points[j][1] - points[k][1]) +
                    points[j][0] * (points[k][1] - points[i][1]) +
                    points[k][0] * (points[i][1] - points[j][1])
                ) / 2.0;
                if (area > maxArea)
                    maxArea = area;
            }
        }
    }
    return maxArea;
};

console.log(largestTriangleArea([[4,6],[6,5],[3,1]]));
console.log(largestTriangleArea([[0,0],[0,1],[1,0],[0,2],[2,0]]));
console.log(largestTriangleArea([[1,0],[0,0],[0,1]]));
