// Implement mapLimit, which is a utility function that produces a list of outputs by mapping each input through an asynchronous iteratee function.
// The provided limit dictates how many operations can occur at once.

// Inputs
// inputs: An array of inputs.
// limit: The maximum number of operations at any one time.
// iterateeFn: The async function that should be called with each input to generate the corresponding output. It will have two arguments:
//      input: The input being processed.
//      callback: A function that will be called when the input is finished processing. It will be provided one argument, the processed output.
// callback: A function that should be called with the array of outputs once all the inputs have been processed.

function getNameById(id, callback) {
  // simulating async request
  const randomRequestTime = Math.floor(Math.random() * 100) + 200;

  setTimeout(() => {
    callback("User" + id);
  }, randomRequestTime);
}

function chop(arr, limit) {
  let i = 0;
  const result = [];

  while (i < arr.length) {
    result.push(arr.slice(i, i + limit));
    i = i + limit;
  }
  return result;
}

function mapLimit(inputs, limit, iterateeFn, callback) {
  const chopped = chop(inputs, limit);

  const result = chopped.reduce((acc, subArray) => {
    return acc.then((val) => {
      return new Promise((resolve, reject) => {
        const temp = [];
        subArray.forEach((num) => {
          iterateeFn(num, (res) => {
            temp.push(res);
            if (temp.length === subArray.length) resolve([...val, ...temp]);
          });
        });
      });
    });
  }, Promise.resolve([]));

  result.then((res) => callback(res)).catch((err) => callback(err));
}

mapLimit([1, 2, 3, 4, 5], 2, getNameById, (allResults) => {
  console.log({ allResults });
});
