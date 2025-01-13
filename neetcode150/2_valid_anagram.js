var isAnagram = function (s, t) {
  const obj = {};
  for (let c of s) {
    if (obj[c] === undefined) obj[c] = 1;
    else obj[c]++;
  }
  for (let c of t) {
    if (obj[c] === undefined) return false;
    else {
      obj[c]--;
      if (obj[c] === 0) delete obj[c];
    }
  }
  if (Object.keys(obj).length === 0) return true;
  else return false;
};

var isAnagram = function (s, t) {
  const arr = Array.from({ length: 26 }).fill(0);
  for (let c of s) arr[c.charCodeAt(0) - "a".charCodeAt(0)]++;
  for (let c of t) {
    if (arr[c.charCodeAt(0) - "a".charCodeAt(0)] <= 0) return false;
    else arr[c.charCodeAt(0) - "a".charCodeAt(0)]--;
  }
  for (let n of arr) if (n > 0) return false;
  return true;
};
