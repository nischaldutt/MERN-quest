// var combinationSum4 = function (nums, target) {
//   const result = [];
//   const len = nums.length;

//   function solve(sum, output) {
//     if (sum === target) {
//       result.push([...output]);
//       return;
//     }
//     if (sum > target) return;
//     for (let i = 0; i < len; i++) {
//       output.push(nums[i]);
//       solve(sum + nums[i], output);
//       output.pop();
//     }
//   }

//   solve(0, []);
//   return result;
// };

var combinationSum4 = function (nums, target) {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= target; i++) {
    for (let num of nums) {
      if (i - num >= 0) {
        dp[i] += dp[i - num];
      }
    }
  }

  return dp[target];
};

console.log(combinationSum4([1, 2, 3], 4));
console.log(combinationSum4([9], 3));
