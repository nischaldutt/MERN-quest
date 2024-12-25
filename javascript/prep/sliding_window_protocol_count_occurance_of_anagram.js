function countOccurancesOfAnangram(str, input) {
  const obj = {};
  for (let key of input) {
    if (obj[key] === undefined) obj[key] = 1;
    else obj[key]++;
  }
  let result = 0;
  let count = Object.keys(obj).length;
  let i = 0;
  let j = 0;
  const k = input.length;
  while (j < str.length) {
    if (obj[str[j]] !== undefined) {
      obj[str[j]]--;
      if (obj[str[j]] === 0) count--;
    }

    if (j - i + 1 < k) j++;
    else if (j - i + 1 === k) {
      if (count === 0) result++;
      if (obj[str[i]] !== undefined) {
        obj[str[i]]++;
        if (obj[str[i]] === 1) count++;
      }
      i++;
      j++;
    }
  }
  return result;
}

console.log(countOccurancesOfAnangram("aabaabaa", "aaba"));
