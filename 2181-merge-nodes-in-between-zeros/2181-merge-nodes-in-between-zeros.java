/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeNodes(ListNode head) {
        ListNode temp = head;
        ListNode sumList = new ListNode();
        ListNode dummySum = sumList;
        while(temp != null && temp.next != null){
            if(temp.val == 0){
                temp = temp.next;
                sumList.next = new ListNode();
                sumList = sumList.next;
            }
            else{
                sumList.val += temp.val;
                temp = temp.next;
            }
        }
        return dummySum.next;
    }
}