function lengthOfLongestSubstringWithKUniqueChars(str, k) {
  const obj = {};
  let result = -Infinity;
  let i = 0;
  let j = 0;
  const len = str.length;
  while (j < len) {
    if (obj[str[j]] === undefined) obj[str[j]] = 1;
    else obj[str[j]]++;
    if (Object.keys(obj).length < k) j++;
    else if (Object.keys(obj).length === k) {
      result = Math.max(result, j - i + 1);
      j++;
    } else if (Object.keys(obj).length > k) {
      while (Object.keys(obj).length > k) {
        obj[str[i]]--;
        if (obj[str[i]] === 0) delete obj[str[i]];
        i++;
      }
      j++;
    }
  }
  return result;
}

console.log(lengthOfLongestSubstringWithKUniqueChars("aabacbebebe", 3));
