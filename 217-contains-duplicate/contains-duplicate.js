/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hash = {} 
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] in hash) {
            return true;
        }
        hash[nums[i]] = true
    }
    return false;
};