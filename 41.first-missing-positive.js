/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 *
 * https://leetcode.com/problems/first-missing-positive/description/
 *
 * algorithms
 * Hard (28.29%)
 * Total Accepted:    196.8K
 * Total Submissions: 693.4K
 * Testcase Example:  '[1,2,0]'
 *
 * Given an unsorted integer array, find the smallest missing positive
 * integer.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,2,0]
 * Output: 3
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [3,4,-1,1]
 * Output: 2
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: [7,8,9,11,12]
 * Output: 1
 * 
 * 
 * Note:
 * 
 * Your algorithm should run in O(n) time and uses constant extra space.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let len = nums.length;
    for(let i = 0; i < len;) {
        if (
            nums[i] > 0 && 
            nums[i] < len && 
            nums[i] !== i+1 &&
            nums[nums[i]-1] !== nums[i]
        ) {
            swap(nums, i, nums[i]-1);
            continue;
        }
        i++;
    }

    let j = 1;
    for (let i = 0; i < len; i++) {
        if (nums[i] === (i+1) && j === i+1) j++;
    }

    return j;
};

function swap(num, i, j) {
    let tmp = num[i];
    num[i] = num[j];
    num[j] = tmp;
}

