/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let tmp = new ListNode(0);
    tmp.next = head;
    let prev = tmp;

    while(prev.next !== null && prev.next.next !== null){
        let first = prev.next;
        let second = first.next;
        prev.next = second;
        first.next = second.next;
        second.next = first;
        prev = first;
    }
    return tmp.next;
};