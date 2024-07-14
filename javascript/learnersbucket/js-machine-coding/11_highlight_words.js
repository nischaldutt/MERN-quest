// problem link: https://learnersbucket.com/examples/interview/highlight-the-words-in-the-string/

function highlight(str, words) {
  const uniqueWords = new Set(words);
  const stringWords = str.split(" ");

  const result = stringWords.map((word) => {
    let output = "";

    if (uniqueWords.has(word)) output = `<strong>${word}</strong>`;
    else {
      const len = word.length;

      for (let i = 0; i < len; i++) {
        const prefix = word.slice(0, i + 1);
        const suffix = word.slice(i + 1);

        if (uniqueWords.has(prefix) && uniqueWords.has(suffix)) {
          output = `<strong>${prefix}${suffix}</strong>`;
          break;
        } else if (uniqueWords.has(prefix) && !uniqueWords.has(suffix)) {
          output = `<strong>${prefix}</strong>${suffix}`;
        } else if (!uniqueWords.has(prefix) && uniqueWords.has(suffix)) {
          output = `${prefix}<strong>${suffix}</strong>`;
        }
      }
    }
    return output === "" ? word : output;
  });
  return result.join(" ");
}

const str = "Ultimate JavaScript / FrontEnd Guide";
const words = ["Front", "End", "JavaScript"];

console.log(highlight(str, words));
