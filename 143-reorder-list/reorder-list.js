/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

 // find the midpoint by cutting the list into two halves using slow and fast pointer. Slow will be at halfway point if you start it at the beginning and increment by 1, fast will start at index 1 and increment by 2.
 // reverse the second part of the list and then merge the two lists


var reorderList = function(head) {
    let slow = head
    let fast = head.next
    // find list midpoint by checking to see if fast still has a value
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    // split into two lists
    second = slow.next
    prev = null
    slow.next = null
    let temp;

    // reverse second half of list
    while (second){
        temp = second.next
        second.next = prev
        prev = second
        second = temp
    }

    // merge two halves
    let first = head
    second = prev
    let temp1, temp2;
    while (second) {
        temp1 = first.next
        temp2 = second.next
        first.next = second
        second.next = temp1
        first = temp1
        second = temp2
    }
};