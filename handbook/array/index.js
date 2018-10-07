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

export const commonElemsOfArrays = (nums1, nums2) => {
  /*
    O(N*M) Brute
      iterate first array N
        look for nums with indexOf M

    Greedy O(N+M)
      set for N = {elem:true} O(1)
      iterate second array M
        look for set[mElem]
          if true push to results.
    */

  const set = {};
  const res = [];
  for (let i = 0; i < nums1.length; i += 1) {
    set[nums1[i]] = true;
  }
  for (let i = 0; i < nums2.length; i += 1) {
    if (set[nums2[i]]) {
      res.push(nums2[i]);
    }
  }
  return res;
};

export const zeroSubSequence = (arr) => {
  /*
    [1, -2, 3, 5, -8, -1]
    [1, -1, 2, 7, -1, -2]
    set = {elem:[repetedIndexes]}
    if elem.length>1
        splice(ix1-1,(ix2-ix1))
  */

  const set = {};
  let indexes = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
    if (set[sum]) { set[sum].push(i); } else { set[sum] = [i]; }

    if (set[sum].length > 1) {
      indexes = set[sum];
      break;
    }
  }

  return arr.splice(indexes[0] + 1, (indexes[1] - indexes[0]));
};

export const twoSum = (arr, target) => {
  /*
    [2, 7, 3, 4, -2, -5]  11

    2,0 7,1 3,2 4,3 -2,4 -5,5

    check if if map[target - arr[i]]
  */

  const map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = i;
  }
  for (let i = 0; i < arr.length; i++) {
    if (map[target - arr[i]]) {
      return [
        arr[i], target - arr[i],
      ];
    }
  }
  return [];
};

export const threeSum = (arr, target) => {
  /**
   * [1,2,3,4,5,6,7,8]
   * O(n^3)
   * sort array
   * iterate first (i)
   *    iterate j = i+1
   *    iterate k = len-1
   * VALUES SHOULD BE UNIQUE
   */
  arr.sort((a, b) => a - b);
  console.log(arr);


  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    let k = arr.length - 1;

    while (j < k) {
      const sum = arr[i] + arr[j] + arr[k];
      console.log(sum);

      if (sum === target) {
        return [arr[i], arr[j], arr[k]];
      }
      if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }
  return [];
};


export const fourSum = (arr, target) => {
  /**
   * [1,2,3,4,5,6,7,8]
   * O(n^3)
   * sort array
   * iterate first (i)
   *    iterate j = i+1
   *    iterate k = len-1
   * VALUES SHOULD BE UNIQUE
   */
  arr.sort((a, b) => a - b);
  console.log(arr);

  for (let q = arr.length - 1; q >= 0; q--) {
    for (let i = 0; i < arr.length; i++) {
      let j = i + 1;
      let k = q - 1;

      while (j < k) {
        const sum = arr[i] + arr[j] + arr[k] + arr[q];
        console.log(sum);

        if (sum === target) {
          return [arr[i], arr[j], arr[k] , arr[q]];
        }
        if (sum < target) {
          j++;
        } else {
          k--;
        }
      }
    }
  }
  return [];
};
