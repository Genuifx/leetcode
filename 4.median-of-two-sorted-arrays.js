/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 *
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (25.65%)
 * Total Accepted:    391.8K
 * Total Submissions: 1.5M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * 
 * Find the median of the two sorted arrays. The overall run time complexity
 * should be O(log (m+n)).
 * 
 * You may assume nums1 and nums2 cannot be both empty.
 * 
 * Example 1:
 * 
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * The median is 2.0
 * 
 * 
 * Example 2:
 * 
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * The median is (2 + 3)/2 = 2.5
 * 
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let ret = [];
    let len = nums1.length + nums2.length;
    while(ret.length < len) {
        ret.push(
            !nums1.length ? nums2.shift() : 
                !nums2.length ? nums1.shift() :
                    nums1[0] < nums2[0] ? nums1.shift() : 
                        nums2.shift()
        );
    }
    if(ret.length % 2 === 0) {
        let start = ret.length/2;
        return (ret[start] + ret[start-1]) /2;
    } else {
        return ret[Math.floor(ret.length/2)];
    }
};

