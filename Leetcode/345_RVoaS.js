/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const arr = s.split('');
    let left = 0;
    let right = arr.length - 1;
    let vowels = new Set(['a','e','i','o','u','A','I','E','O','U']);

    while(left < right){
        while(left < right && !vowels.has(arr[left])){
            left++;
        }
        while(left < right && !vowels.has(arr[right])){
            right--;
        }

        if(left < right){
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    return arr.join('');
};

console.log(reverseVowels("IceCreAm"));