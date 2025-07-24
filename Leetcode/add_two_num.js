/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : null);
}

function arrayToList(arr) {
    let tmp = new ListNode(0);
    let current = tmp;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return tmp.next;
}
function listToArray(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

var addTwoNumbers = function(l1, l2) {
    let tmp = new ListNode(0);
    let current = tmp;
    let carry = 0;
    
    while (l1 || l2 || carry) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        
        current.next = new ListNode(sum % 10);
        current = current.next;
        
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    
    return tmp.next;
};
let l1 = arrayToList([2, 4, 3]);
let l2 = arrayToList([5, 6, 4]);
let result = addTwoNumbers(l1, l2);
console.log(listToArray(result));