/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let seen = new Set()
    let left = 0
    
    for (let right = 0; right < nums.length; right++){
        if (!seen.has(nums[right])) {
            nums[left] = nums[right]
            seen.add(nums[left])
            left++
        } 
    }

    return left
};