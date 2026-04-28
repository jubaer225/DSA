/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = {}

    for ( let i = 0; i < nums.length; i ++) {
        let current = target - nums[i]
        if (current in hash) {
            return [hash[current], i]
        }
        hash[nums[i]] = i
    }
};