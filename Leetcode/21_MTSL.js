/**
 * Definition for singly-linked list.
 * */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let tmp = new ListNode();
    let current = tmp;
    while(list1 !== null && list2 !== null){
        if(list1.val < list2.val){
            current.next = list1;
            list1 = list1.next;
        }else{
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    if(list1 !== null){
        current.next = list1;
    }else if(list2 !== null){
        current.next = list2;
    }

    return tmp.next;
        
};

const l1_node3 = new ListNode(4);
const l1_node2 = new ListNode(2, l1_node3);
const l1_node1 = new ListNode(1, l1_node2);

const l2_node3 = new ListNode(4);
const l2_node2 = new ListNode(3, l2_node3);
const l2_node1 = new ListNode(1, l2_node2);

const mergedList = mergeTwoLists(l1_node1, l2_node1);

function printList(node) {
    let result = [];
    let current = node;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

console.log("List 1:");
printList(l1_node1);

console.log("List 2:");
printList(l2_node1);

console.log("Merged List:");
printList(mergedList);