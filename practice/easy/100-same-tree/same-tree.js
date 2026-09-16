// ---- TreeNode helpers (auto-added so this file runs locally) ----
function TreeNode(val, left, right) {
    this.val   = (val   === undefined ? 0    : val);
    this.left  = (left  === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// Build a tree from a LeetCode-style level-order array, e.g. [1,null,2,3]
function arrayToTree(arr) {
    if (!arr || !arr.length || arr[0] === null || arr[0] === undefined) return null;
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
    while (queue.length && i < arr.length) {
        const node = queue.shift();
        if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;
        if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }
    return root;
}

// Serialize a tree back into a level-order array (nulls trimmed from the tail)
function treeToArray(root) {
    if (!root) return [];
    const out = [];
    const queue = [root];
    while (queue.length) {
        const node = queue.shift();
        if (node === null) { out.push(null); continue; }
        out.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
    }
    while (out.length && out[out.length - 1] === null) out.pop();
    return out;
}
// -----------------------------------------------------------------

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
    // TODO: implement
    
}
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // TODO: implement
    
};