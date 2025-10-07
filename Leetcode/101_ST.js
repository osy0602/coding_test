
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }
 
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root)
        return true;
    function mirror(node1, node2){
        if(!node1 && !node2)
            return true;
        if(!node1 || !node2)
            return false;
        if(node1.val !== node2.val)
            return false;
        return mirror(node1.left, node2.right) && mirror(node1.right, node2.left);
    }
    return mirror(root.left, root.right);
};
const myTree = new TreeNode(1, new TreeNode(2, null, new TreeNode(3)), new TreeNode(2, null, new TreeNode(3)));
console.log(isSymmetric(myTree));

