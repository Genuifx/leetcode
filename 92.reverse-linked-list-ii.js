/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
 *
 * https://leetcode.com/problems/reverse-linked-list-ii/description/
 *
 * algorithms
 * Medium (34.14%)
 * Total Accepted:    182.3K
 * Total Submissions: 532.7K
 * Testcase Example:  '[1,2,3,4,5]\n2\n4'
 *
 * Reverse a linked list from position m to n. Do it in one-pass.
 * 
 * Note: 1 ≤ m ≤ n ≤ length of list.
 * 
 * Example:
 * 
 * 
 * Input: 1->2->3->4->5->NULL, m = 2, n = 4
 * Output: 1->4->3->2->5->NULL
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let i = 0;
    let p = new ListNode();
    p.next = head;
    head = p;
    let start; 

    let p1;
    let p2;

    while(p) {
        if (i === m-1) start = p;

        if (i === m) p2 = p1 = new ListNode(p.val);

        if (i > m && i <= n) {
            let node = new ListNode(p.val);
            node.next = p2;
            p2 = node;
        }

        if (i > n) break;

        p = p.next;
        i++;
    }

    if (start) start.next = p2;
    if (p) p1.next = p;

    return head.next;
};

