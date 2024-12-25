function lengthOfLongestSubstringWithIUniqueChars(arr) {
  const obj = {};
  let result = -Infinity;
  let i = 0;
  let j = 0;
  const len = arr.length;
  while (j < len) {
    if (obj[arr[j]] === undefined) obj[arr[j]] = 1;
    else obj[arr[j]]++;
    if (Object.keys(obj).length < j - i + 1) {
      while (Object.keys(obj).length < j - i + 1) {
        obj[arr[i]]--;
        if (obj[arr[i]] === 0) delete obj[arr[i]];
        i++;
      }
      j++;
    } else if (j - i + 1 === Object.keys(obj).length) {
      result = Math.max(result, j - i + 1);
      j++;
    }
  }
  return result;
}

console.log(lengthOfLongestSubstringWithIUniqueChars("pwwkew"));
