/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var mergeTwoLists = function(l1, l2) {
  let r = new ListNode(0)
  let l = r

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      l.next = l1
      l1 = l1.next
    } else {
      l.next = l2
      l2 = l2.next
    }
    l = l.next
  }
  if (l1) l.next = l1
  if (l2) l.next = l2

  return r.next
}
