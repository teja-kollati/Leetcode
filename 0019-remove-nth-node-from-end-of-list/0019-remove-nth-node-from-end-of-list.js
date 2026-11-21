/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = head;
    let size = 0;

    while(dummy != null){
        dummy = dummy.next;
        size++;
    }


    if(size === n){
        return head.next;
    }

    let pos = size - n;
    dummy = head;
    while(pos > 1){
        dummy = dummy.next;
        pos--;
    }

    if(dummy.next === null){
        dummy = null;
    }
    else if(dummy.next.next === null){
        dummy.next = null;
    }
    else{
        dummy.next = dummy.next.next;
    }

    return head;
};