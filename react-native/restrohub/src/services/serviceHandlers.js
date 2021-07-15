export const resolvePromise = response => {
  return new Promise((resolve, reject) => {
    return resolve(response);
  });
};

export const rejectPromise = error => {
  return new Promise((resolve, reject) => {
    return reject(error);
  });
};
