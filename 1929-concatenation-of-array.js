/*
Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.
*/

var getConcatenation = function(nums) {
    let ans = [];
    for (let i = 0; i < 2; i++) {
        nums.forEach(num => {
            ans.push(num);
        });
    }
    // console.log(ans)
    return ans;
};

/*
there is also an easier way with an array method concat()
I found this out after I wrote it the way I did

var getConcatenation = function(nums) {
    let ans = nums.concat(nums);
    return ans;
};

*/

getConcatenation([1,2,1]); // should return [1,2,1,1,2,1]
getConcatenation([1,3,2,1]);// should return [1,3,2,1,1,3,2,1]