/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const originalColor = image[sr][sc];
    if (originalColor === color) return image;

    const fill = (r, c) => {
        if (r < 0 || r >= image.length || 
            c < 0 || c >= image[0].length || 
            image[r][c] !== originalColor) {
            return;
        }

        image[r][c] = color;
        
        fill(r, c - 1); // left
        fill(r, c + 1); // right
        fill(r - 1, c); // up
        fill(r + 1, c); // down
    };

    fill(sr, sc);
    return image;
};

console.log(floodFill([[0,0,0],[0,1,1]], 1, 1, 1)); // [[0,0,0],[0,1,1]]