export const pyramid = (n) => {
  let pyrStr = '';

  if (n == 1) return '#';

  let rowCount = n;
  let colCount = (n - 1) + n;


  for (let i = 0; i < rowCount; i++) {
    const row = Array(colCount).fill(' ');

    const middle = Math.floor(colCount / 2);

    const startIndex = middle - i;
    const endIndex = middle + i;
    for (let j = startIndex; j <= endIndex; j++) {
      row[j] = '#';
    }
    pyrStr += `${row.join('')}\n`;
  }
  return pyrStr;
};
