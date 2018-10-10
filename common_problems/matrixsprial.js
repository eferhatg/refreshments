export const matrixspiral = (n) => {
  let result = [];
  let counter = 1;
  let rowStart = 0;
  let rowEnd = n - 1;
  let colStart = 0;
  let colEnd = n - 1;

  for (let i = 0; i < n; i++) {
    result.push([]);
  }
  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let i = colStart; i <= colEnd; i++) {
      result[rowStart][i] = counter;

      counter++;
    }
    rowStart++;

    for (let i = rowStart; i <= rowEnd; i++) {
      result[i][colEnd] = counter;

      counter++;
    }
    colEnd--;


    for (let i = colEnd; i >= colStart; i--) {
      result[rowEnd][i] = counter;

      counter++;
    }
    rowEnd--;

    for (let i = rowEnd; i >= rowStart; i--) {
      result[i][colStart] = counter;

      counter++;
    }
    colStart++;
  }

  return result;
};


//   1   2  3  4
//   12 13 14  5
//   11 16 15  6
//   10  9  8  7
//
//
