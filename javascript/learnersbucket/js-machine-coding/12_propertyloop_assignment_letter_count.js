// problem: https://github.com/ratracegrad/coderbyte-Beginner/blob/master/Letter%20Count%20I

// time: O(n)

function LetterCount(str) {
  let result = -1;
  const obj = {
    repeatedChars: 0,
    s: "",
  };

  const words = str.split(" ");
  for (let word of words) {
    let freq = {};
    let count = 0;
    for (let c of word) {
      if (freq[c] === undefined) freq[c] = 1;
      else {
        if (freq[c] === 1) count++;
        freq[c] = freq[c] + 1;
      }
    }

    if (Object.keys(freq).length < word.length) {
      if (obj.repeatedChars < count) {
        obj.repeatedChars = count;
        obj.s = word;
      }
    }
  }

  return obj.repeatedChars === 0 ? -1 : obj.s;
}
