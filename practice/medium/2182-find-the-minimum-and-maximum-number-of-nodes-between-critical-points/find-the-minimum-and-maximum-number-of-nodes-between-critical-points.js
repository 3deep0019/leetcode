// ---- ListNode helpers (auto-added so this file runs locally) ----
function ListNode(val, next) {
    this.val  = (val  === undefined ? 0    : val);
    this.next = (next === undefined ? null : next);
}

function arrayToList(arr) {
    const dummy = new ListNode(0);
    let cur = dummy;
    for (const v of (arr || [])) {
        cur.next = new ListNode(v);
        cur = cur.next;
    }
    return dummy.next;
}

function listToArray(head) {
    const out = [];
    while (head) { out.push(head.val); head = head.next; }
    return out;
}
// -----------------------------------------------------------------

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
    // TODO: implement
    
}
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    // TODO: implement
    
};