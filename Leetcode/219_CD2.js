/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (map.has(num)) {
            const last = map.get(num);
            if (i - last <= k) {
                return true;
            }
        }
        map.set(num, i);
    }

    return false;
};

console.log(containsNearbyDuplicate([1,2,3,1],3));