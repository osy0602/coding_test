
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }
 
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root)
        return [];
    let answer = [];

    let queue = [root];

    while(queue.length > 0){
        let levelLength = queue.length;
        let currentLevel = [];

        for(let i =0;i<levelLength;i++){
            let currentNode = queue.shift();
            currentLevel.push(currentNode.val);
            if(currentNode.left){
                queue.push(currentNode.left);
            }
            if(currentNode.right){
                queue.push(currentNode.right);
            }
        }
        answer.push(currentLevel)
    }
    return answer;
};

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

const result = levelOrder(root);
console.log(result);