/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // binary search
    let low = 0
    let high = nums.length - 1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (nums[mid] === target) return mid

        // check if mid is in left portion
        if (nums[low] <= nums[mid]) {
            if (target >= nums[low] && target < nums[mid]) {
                // target is in left half
                high = mid - 1
            } else {
                // target is in right half
                low = mid +1 
            }
        } else {
            // mid is in the right portion
            if (target > nums[mid] && target <= nums[high]){
                // target is in right half
                low = mid + 1
            } else {
                // target is in the left half
                high = mid - 1
            }
        }
    }

    return - 1
};