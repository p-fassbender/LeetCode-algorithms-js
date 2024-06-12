/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.
*/
var runningSum = function(nums) {
    let sums = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        sums.push(nums[i] + sums[i-1])
    }
    // console.log(sums)
    return sums;
};

runningSum([1,2,3,4]); // [1,3,6,10]
runningSum([1,1,1,1,1]); // [1,2,3,4,5]
runningSum([3,1,2,10,1]) // [3,4,6,16,17]