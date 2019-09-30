/*
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

SOURCE: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

*/

var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1]){
            nums.splice(i--,1)       
        } 
    }
}; 