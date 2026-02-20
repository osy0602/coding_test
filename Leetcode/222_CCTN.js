
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}


function buildTree(array) {
    if (!array.length) return null;
    let nodes = array.map(val => val !== null ? new TreeNode(val) : null);
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i] !== null) {
            let leftIdx = 2 * i + 1;
            let rightIdx = 2 * i + 2;
            if (leftIdx < nodes.length) nodes[i].left = nodes[leftIdx];
            if (rightIdx < nodes.length) nodes[i].right = nodes[rightIdx];
        }
    }
    return nodes[0];
}

var countNodes = function(root) {
    if (!root) return 0;

    let leftHeight = 0;
    let rightHeight = 0;
    let left = root;
    let right = root;

    while (left) {
        leftHeight++;
        left = left.left;
    }

    while (right) {
        rightHeight++;
        right = right.right;
    }

    
    if (leftHeight === rightHeight) {
        return Math.pow(2, leftHeight) - 1;
    }

    return 1 + countNodes(root.left) + countNodes(root.right);
};

const testArray = [1, 2, 3, 4, 5, 6];
const root = buildTree(testArray);

console.log(countNodes(root)); 
