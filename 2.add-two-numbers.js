/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (30.67%)
 * Total Accepted:    784.4K
 * Total Submissions: 2.6M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example:
 * 
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let a = l1;
    let b = l2;
    let ret = new ListNode(0);
    let curr = ret;

    let carry = 0;
    while (a != null || b != null) {
        let sum = 0;
        if (a !== null) {
            sum += a.val;
            a = a.next;
        }

        if (b !== null) {
            sum += b.val;
            b = b.next;
        }

        sum += carry;
        curr.next = new ListNode(sum % 10);
        carry = Math.floor(sum / 10);

        curr = curr.next;
    }

    if(carry !== 0) curr.next = new ListNode(carry);

    return ret.next;
};


