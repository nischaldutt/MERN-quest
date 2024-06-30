// Counter to keep track of unique IDs for each timeout
let count = 0;

// Object to store timeout information
const obj = {};

// Custom implementation of setTimeout
function mySetTimeout(callback, delay, ...args) {
  // Ensure the callback is a function
  if (typeof callback !== "function") return;

  // Assign a unique ID to the timeout
  const currentCount = count++;

  // Store the callback, execution time, and arguments
  obj[currentCount] = {
    callback,
    time: Date.now() + delay,
    args,
  };

  // Return the unique ID
  return currentCount;
}

// Function to process and execute callbacks
function processCallbacks() {
  Object.keys(obj).forEach((key) => {
    const { callback, time, args } = obj[key];

    // Execute the callback if the specified delay has passed
    if (Date.now() > time) {
      callback(...args);
      delete obj[key]; // Remove executed callback from the object
    } else {
      // Continue checking for the next available idle period
      requestIdleCallback(processCallbacks);
    }
  });
}

// Start the process to check for idle periods and execute callbacks
requestIdleCallback(processCallbacks);

// Custom implementation of clearTimeout
function clearMySetTimeout(key) {
  // Remove the timeout entry if it exists
  if (obj[key] !== undefined) delete obj[key];
}

// Example callback function
function foo(a, b, c) {
  console.log({ a, b, c });
}

// Example usage of the custom setTimeout
function fun() {
  const test = 10;
  // Schedule the foo function to run after 2000 ms with specified arguments
  const timerId = mySetTimeout(foo, 2000, "param1", "param2", test);
}

fun();
