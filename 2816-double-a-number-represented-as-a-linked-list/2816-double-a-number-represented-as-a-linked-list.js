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
var doubleIt = function(head) {
    let previous = null;
    let current = head;

    while(current != null){
        let doubleNumber = current.val * 2;

        if(previous === null && doubleNumber >= 10){
            head = new ListNode(1);
            head.next = current;
            current.val = doubleNumber % 10;
        }
        else if(doubleNumber >= 10){
            previous.val += 1;
            current.val = doubleNumber % 10;
        }
        else{
            current.val = doubleNumber;
        }

        previous = current;
        current = current.next;
    }

    return head;
};