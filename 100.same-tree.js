/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 *
 * https://leetcode-cn.com/problems/same-tree/description/
 *
 * algorithms
 * Easy (49.62%)
 * Total Accepted:    11.7K
 * Total Submissions: 23.6K
 * Testcase Example:  '[1,2,3]\n[1,2,3]'
 *
 * 给定两个二叉树，编写一个函数来检验它们是否相同。
 * 
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 * 
 * 示例 1:
 * 
 * 输入:       1         1
 * ⁠         / \       / \
 * ⁠        2   3     2   3
 * 
 * ⁠       [1,2,3],   [1,2,3]
 * 
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入:      1          1
 * ⁠         /           \
 * ⁠        2             2
 * 
 * ⁠       [1,2],     [1,null,2]
 * 
 * 输出: false
 * 
 * 
 * 示例 3:
 * 
 * 输入:       1         1
 * ⁠         / \       / \
 * ⁠        2   1     1   2
 * 
 * ⁠       [1,2,1],   [1,1,2]
 * 
 * 输出: false
 * 
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if(p == null && q == null) return true;

  if (p != null && q != null && p.val == q.val){
    return isSameTree(q.left,p.left) && isSameTree(q.right,p.right);
  } else {
    return false;
  }
};
// const Tree1 = {
//   val: 1,
//   right: {
//     val: 3,
//     right: null,
//     left: null,
//   },
//   left: {
//     val: 2,
//     right: null,
//     left: 2,
//   },
// };
// const Tree2 = {
//   val: 1,
//   right: {
//     val: 3,
//     right: null,
//     left: null
//   }, 
//   left: {
//     val: 2,
//     right: null,
//     left: null ,
//   },
// };
// isSameTree(Tree1,Tree2);
