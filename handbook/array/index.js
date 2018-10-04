export class Iterator {
  constructor(arr) {
    this.data = arr;
    this.step = 0;
  }

  hasNext() {
    return !!this.data[this.step + 1];
  }

  next() {
    this.step++;
    return this.data[this.step];
  }

  remove() {
    delete this.data[this.step];
  }
}

export class Paginator {
  constructor(_data) {
    this.data = _data;
  }

  paginate(pageSize, pageNumber) {
    const startIx = (pageNumber - 1) * pageSize;
    const endIx = startIx + pageSize;
    return this
      .data
      .slice(startIx, endIx);
  }
}

export const sort2dArray = (arr) => {
  const sortByRowSum = (parentArr) => {
    const sums = new Map(parentArr.map(row => [
      row, row.reduce((sum, elem) => sum + elem, 0),
    ]));
    return parentArr.sort((a, b) => sums.get(a) - sums.get(b));
  };
  const sortedParentArr = sortByRowSum(arr);
  for (let i = 0; i < sortedParentArr.length; i += 1) {
    sortedParentArr[i].sort((a, b) => a - b);
  }
  return sortedParentArr;
};

export const getProductsOfAllIntsExceptAtIndex = (arr) => {
  /*
  BF O(n^2)
  let result
  go through elements 0 to length-1 = i
    go through elements 0 to length-1 = j
      result.push(sum*=j)

   {10, 3, 5, 6, 2}

   for (let i = 0; i < arr.length; i += 1) {
    let product = 1;
    for (let j = 0; j < arr.length; j += 1) {
      if (i !== j) {
        product *= arr[j];
      }
    }
    result.push(product);
  }
  */

  const result = [];

  const below = [];
  let indexValue = 1;
  for (let i = 0; i < arr.length; i += 1) {
    below[i] = indexValue;
    indexValue *= arr[i];
  }
  const above = [];
  indexValue = 1;
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    above[i] = indexValue;
    indexValue *= arr[i];
  }

  for (let i = 0; i < arr.length; i += 1) {
    result.push(below[i] * above[i]);
  }

  return result;
};
