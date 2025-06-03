var maxProfit = function (prices) {
  const len = prices.length;
  let l = 0;
  let r = 1;
  let result = 0;
  while (l < r && r < len) {
    const profit = prices[r] - prices[l];
    if (profit < 0) l = r;
    else result = Math.max(profit, result);
    r++;
  }
  return result;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
