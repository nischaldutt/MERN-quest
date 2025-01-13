var isValid = function (s) {
  const arr = [];
  for (let c of s) {
    if (c === "(" || c === "{" || c === "[") arr.push(c);
    else if (c === ")") {
      const top = arr[arr.length - 1];
      if (top === "(") arr.pop();
      else return false;
    } else if (c === "}") {
      const top = arr[arr.length - 1];
      if (top === "{") arr.pop();
      else return false;
    } else if (c === "]") {
      const top = arr[arr.length - 1];
      if (top === "[") arr.pop();
      else return false;
    }
  }
  if (arr.length === 0) return true;
  else return false;
};
