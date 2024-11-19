function searchRowAndColumnwise(arr, key) {
  const rows = arr.length;
  const columns = arr[0].length;
  let i = 0;
  let j = columns - 1;

  while (i >= 0 && i < rows && j >= 0 && j < columns) {
    if (key === arr[i][j]) return { i, j };
    else if (key < arr[i][j]) j--;
    else i++;
  }
  return -1;
}

console.log(
  searchRowAndColumnwise(
    [
      [10, 20, 30, 40],
      [15, 25, 35, 45],
      [27, 29, 37, 45],
      [32, 33, 39, 50],
    ],
    27
  )
);
