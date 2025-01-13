var maxProfit = function (prices) {
  const len = prices.length;
  if (len === 0 || len === 1) return 0;
  let i = 0;
  let j = i + 1;
  let result = 0;
  while (i < j && j < len) {
    const profit = prices[j] - prices[i];
    if (profit < 0) i = j;
    else result = Math.max(result, profit);
    j++;
  }
  return result;
};
