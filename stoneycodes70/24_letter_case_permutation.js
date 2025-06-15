var letterCasePermutation = function (s) {
  const result = [];
  solve(s, 0, "", result);
  return result;
};

function solve(s, index, output, result) {
  if (index === s.length) {
    result.push(output);
    return;
  }
  const c = s[index];
  if (isChar(c)) {
    solve(s, index + 1, output + c.toLowerCase(), result);
    solve(s, index + 1, output + c.toUpperCase(), result);
  } else solve(s, index + 1, output + c, result);
}

function isChar(c) {
  const code = c.charCodeAt(0);
  return (code >= 97 && code <= 122) || (code >= 65 && code <= 90);
}

console.log(letterCasePermutation("a1b2"));
console.log(letterCasePermutation("3z4"));
