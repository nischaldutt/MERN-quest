var containsDuplicate = function (nums) {
  const obj = {};
  for (let n of nums) {
    if (obj[n] === undefined) obj[n] = 1;
    else return true;
  }
  return false;
};
