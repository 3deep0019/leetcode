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
var deleteDuplicates = function(head) {
    let loco = new ListNode();
    let current = loco;
    const map = new Map();
    while (head) {
        if (!map.has(head.val)) {
        map.set(head.val, 1);
        current.next = head;
        current = current.next;
        }
        head = head.next;
    }

    current.next = null;

    return loco.next;
};