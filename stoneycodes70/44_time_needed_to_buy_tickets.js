var timeRequiredToBuy = function (tickets, k) {
  let result = 0;
  const len = tickets.length;

  for (let i = 0; i < len; i++) {
    if (i <= k) result += Math.min(tickets[i], tickets[k]);
    else result += Math.min(tickets[i], tickets[k] - 1);
  }
  return result;
};

console.log(timeRequiredToBuy([2, 3, 2], 2));
console.log(timeRequiredToBuy([5, 1, 1, 1], 0));
