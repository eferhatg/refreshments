export const palindrome = val => val === val.split('').reduce((rev, char) => char + rev);

export const palindromeWithoutReverse = val => val.split('').every((c, i) => val.charAt(val.length - 1 - i) == c);

export const longestPalindrome = (val) => {
  let maxLength = 1;
  let start = 0;

  const len = val.length;
  let rightIx;
  let leftIx;

  for (let i = 1; i < len; i++) {
    rightIx = i;
    leftIx = i - 1;
    while (leftIx >= 0 && rightIx < len && val[rightIx] === val[leftIx]) {
      if (maxLength < rightIx - leftIx + 1) {
        maxLength = rightIx - leftIx + 1;
        start = leftIx;
      }
      rightIx++;
      leftIx--;
    }

    rightIx = i + 1;
    leftIx = i - 1;
    while (leftIx >= 0 && rightIx < len && val[rightIx] === val[leftIx]) {
      if (maxLength < rightIx - leftIx + 1) {
        maxLength = rightIx - leftIx + 1;
        start = leftIx;
      }
      rightIx++;
      leftIx--;
    }
  }
  return val.substring(start, start + maxLength);
};
