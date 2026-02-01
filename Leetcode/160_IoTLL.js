/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let positionA = headA;
    let positionB = headB;

    while(positionA !== positionB){
        if(positionA === null){
            positionA = headB;
        }
        else{
            positionA = positionA.next;
        }

        if(positionB === null){
            positionB = headA;

        }
        else{
            positionB = positionB.next;
        }
    }

    return positionA;
};


const common = new ListNode(8);
common.next = new ListNode(4);
common.next.next = new ListNode(5);

const headA = new ListNode(4);
headA.next = new ListNode(1);
headA.next.next = common;

const headB = new ListNode(5);
headB.next = new ListNode(6);
headB.next.next = new ListNode(1);
headB.next.next.next = common;

const intersection = getIntersectionNode(headA, headB);

if (intersection) {
    console.log(`교차점의 값: ${intersection.val}`);
} else {
    console.log("교차점이 없습니다.");
}