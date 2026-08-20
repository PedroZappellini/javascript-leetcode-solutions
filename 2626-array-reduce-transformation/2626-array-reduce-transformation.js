/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let totalValue = init;

    if (nums.length === 0) {
        return totalValue;
    } else {
        for (i=0; i < nums.length; i++) {
            totalValue = fn(totalValue, nums[i]);
        }
    }

    return totalValue;
};