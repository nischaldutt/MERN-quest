var climbStairs = function (n) {
  if (n <= 2) return n;
  return climbStairs(n - 1) + climbStairs(n - 2);
};

function memoisedClimbStairs(n, dp = new Array(n + 1).fill(0)) {
  if (n <= 2) return n;
  if (dp[n] !== Infinity) return dp[n];
  return (dp[n] =
    memoisedClimbStairs(n - 1, dp) + memoisedClimbStairs(n - 2, dp));
}

function iterativeClimbStairs(n) {
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

console.log(iterativeClimbStairs(2));
console.log(iterativeClimbStairs(3));
