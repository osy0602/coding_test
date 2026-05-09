
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        tmp = ListNode(0)
        curr  = tmp
        carry = 0

        while l1 or l2 or carry:
            val1 = l1.val if l1 else 0
            val2 = l2.val if l2 else 0

            total = val1 + val2 + carry
            carry = total // 10
            newNum = total % 10

            curr.next = ListNode(newNum)
            curr = curr.next

            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None

        return tmp.next
        
def list_to_linked(lst):
    head = ListNode(lst[0])
    current = head
    for num in lst[1:]:
        current.next = ListNode(num)
        current = current.next
    return head

def list_to_linkedlist(arr):
    if not arr: return None
    head = ListNode(arr[0])
    curr = head
    for val in arr[1:]:
        curr.next = ListNode(val)
        curr = curr.next
    return head

def linkedlist_to_list(node):
    res = []
    while node:
        res.append(node.val)
        node = node.next
    return res

if __name__ == "__main__":
    sol = Solution()
    
    
    l1 = list_to_linkedlist([2, 4, 3])
    l2 = list_to_linkedlist([5, 6, 4])
    
    result_node = sol.addTwoNumbers(l1, l2)
    print(linkedlist_to_list(result_node))