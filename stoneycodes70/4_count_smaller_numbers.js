// time: O(nlogn)
// spcae: O(n)
var smallerNumbersThanCurrent = function (nums) {
  const result = [];
  const sorted = nums.toSorted((a, b) => a - b);
  let obj = {};
  for (let [i, x] of sorted.entries()) if (obj[x] === undefined) obj[x] = i;
  for (let x of nums) result.push(obj[x]);
  return result;
};
