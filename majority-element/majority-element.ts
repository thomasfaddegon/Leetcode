function majorityElement(nums: number[]): number {
    let hash = {}
    let min = Math.floor(nums.length / 2) + 1

    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) {
            hash[nums[i]] +=1
        } else {
            hash[nums[i]] = 1
        }
        if (hash[nums[i]] >= min) return nums[i]
    }
};