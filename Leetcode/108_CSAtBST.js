function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var sortedArrayToBST = function(nums) {
    function makingT(start, end){
        if(start > end){
            return null;
        }
        const mid = Math.floor((start+end)/2);
        const root = new TreeNode(nums[mid]);

        root.left = makingT(start,mid - 1);
        root.right = makingT(mid+1, end);

        return root;
    }
    return makingT(0, nums.length -1);
};

console.log(sortedArrayToBST([-10,-3,0,5,9]));