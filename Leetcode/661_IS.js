/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    let m = img.length;
    let n = img[0].length;

    let answer = new Array(m).fill(0).map(() => new Array(n).fill(0));

    for(let i = 0;i<m;i++){
        for(let j = 0; j<n;j++){
            let sum = 0;
            let count = 0;

            for(let k = i - 1; k <= i + 1; k++){
                for(let p = j - 1; p <= j+1;p++){
                    if(k>=0 && k<m && p>=0 && p<n){
                        sum += img[k][p];
                        count++;
                    }
                }
            }

            answer[i][j] = Math.floor(sum/count);
        }
    }
    return answer;
};

console.log(imageSmoother([[1,1,1],[1,0,1],[1,1,1]]));
console.log(imageSmoother([[100,200,100],[200,50,200],[100,200,100]]));