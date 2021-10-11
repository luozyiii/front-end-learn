/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    // 边界控制
    if(nums === null || nums.length === 0) {
        return 0
    }
    let i = 0;
    for(let j = 0; j < nums.length; j++){
        if(nums[j] != 0) {
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            i++
        }
    }
    return nums
};
moveZeroes([0,1,0,3,12])