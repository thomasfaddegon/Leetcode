/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

// for every node in the tree, compare it to the subtree

// edge cases:

var isSubtree = function(root, subRoot) {
    function sameTree(root, subRoot) {
        if (!subRoot && !root) {
            return true;
        }

        if (subRoot && root && root.val === subRoot.val) {
            return (
                sameTree(root.left, subRoot.left) &&
                sameTree(root.right, subRoot.right)
            );
        }

        return false;
    }

    if (!subRoot) return true;
    if (!root) return false;

    if (sameTree(root, subRoot)) return true;

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};