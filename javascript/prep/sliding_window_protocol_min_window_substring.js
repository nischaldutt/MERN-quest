function minWindoSubstring(str, input) {
  const obj = {};
  for (let c of input) {
    if (obj[c] === undefined) obj[c] = 1;
    else obj[c]++;
  }
  let count = Object.keys(obj).length;
  let result = Infinity;
  let i = 0;
  let j = 0;
  const len = str.length;
  while (j < len) {
    if (obj[str[j]] !== undefined) {
      obj[str[j]]--;
      if (obj[str[j]] === 0) count--;
    }
    j++;
    if (count === 0) {
      while (count === 0) {
        if (obj[str[i]] !== undefined) {
          obj[str[i]]++;
          if (obj[str[i]] === 1) count++;
        }
        i++;
      }
      result = Math.min(result, j - i + 1);
    }
  }
  return result;
}

console.log(minWindoSubstring("bdtotmtaptat", "tta"));
