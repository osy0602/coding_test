
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    function treeHeight(node){
        if(!node){
            return 0;
        }
        let left = treeHeight(node.left);
        let right = treeHeight(node.right);

        if(left === -1 || right === -1){
            return -1;
        }
        if(Math.abs(left - right) > 1){
            return -1;
        }

        return Math.max(left, right) + 1;
    }
    return treeHeight(root) !== -1;
};

function buildTree(arr) {
    if (!arr.length) return null;
    let nodes = arr.map(val => val !== null ? new TreeNode(val) : null);
    let root = nodes[0];
    let queue = [root];
    let i = 1;

    while (queue.length && i < nodes.length) {
        let node = queue.shift();
        if (node) {
            node.left = nodes[i++];
            queue.push(node.left);
            if (i < nodes.length) {
                node.right = nodes[i++];
                queue.push(node.right);
            }
        }
    }
    return root;
}

const testCase1 = [3, 9, 20, null, null, 15, 7]; // 결과: true
const testCase2 = [1, 2, 2, 3, 3, null, null, 4, 4]; // 결과: false

const tree1 = buildTree(testCase1);
const tree2 = buildTree(testCase2);

console.log(isBalanced(tree1)); 
console.log(isBalanced(tree2));