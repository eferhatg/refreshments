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
          return [arr[i], arr[j], arr[k], arr[q]];
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

export const maxContinSubSet = (arr) => {
  /* BF
    iterate start index
      iterate array size from 1 to N-i (s)

  */
  let generalSum = 0;
  const maxIxs = [0, 0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      const subsum = 0;
      for (let k = i; k < i + j; k++) {
        subsum += arr[k];
      }
      if (generalSum < subsum) {
        generalSum = subsum;
        maxIxs[0] = i;
        maxIxs[1] = i + j - 1;
      }
      generalSum = subsum > generalSum ? subsum : generalSum;
    }
  }

  return arr.splice(maxIxs[0], maxIxs[1] - 1);
};

export const trappingRainWater = (arr) => {
  const leftMax = {};
  const rightMax = {};
  const len = arr.length;
  let volume = 0;

  leftMax[0] = arr[0];
  rightMax[len - 1] = arr[len - 1];

  for (let i = 1; i < len; i++) {
    leftMax[i] = leftMax[i - 1] > arr[i] ? leftMax[i - 1] : arr[i];
  }

  for (let i = len - 2; i >= 0; i--) {
    rightMax[i] = rightMax[i + 1] > arr[i] ? rightMax[i + 1] : arr[i];
  }

  for (let i = 1; i < len - 1; i++) {
    const minOfHeight = Math.min(rightMax[i], leftMax[i]);
    volume += minOfHeight - arr[i];
  }
  return volume;
};
export const increaseSplittedArray = (arr) => {
  /**
   * iterate n to 0
   *  if elem is not 9 add break return
   *  if elem is 9 make it 0 and do it until elem not 9
   */

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 9 && i === 0) {
      arr[i] = 0;
      arr.unshift(1);
      break;
    } else if (arr[i] === 9) {
      arr[i] = 0;
    } else {
      arr[i]++;
      break;
    }
  }
  return arr;
};


export const secondMaxValue = (arr) => {
  let max = arr[0];
  let secondMax = -Infinity;

  for (let i = 1; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
    if (max > arr[i] && secondMax < arr[i]) {
      secondMax = arr[i];
    }
  }
  return secondMax === -Infinity ? -Infinity : secondMax;
};


export const reverseByOffset = (arr, n) => {
  /**
   * [1, 4, 2, 5, 20]
   * [2, 5, 20, 1, 4]}
   *
   * iterate arr
   *  arr.push(arr.shift())
   */
  for (let i = 0; i < n; i++) {
    arr.push(arr.shift());
  }
  return arr;
};

export const findDublicateWithinKDistance = (arr, k) => {
  /**
   * [1, 2, 3, 1, 4, 5]
   * [1, 2, 3, 4, 5]
   *
   * BF: iterate array i from 0 to length
   *        iterate array j from i to i+n
   *              if found same with arr[i] then remove it
   */


  const hs = {};
  for (let i = 0; i < arr.length; i++) {
    if (hs[arr[i]]) {
      return true;
    }
    hs[arr[i]] = true;
    if (i >= k) delete hs[arr[i - k]];
  }
  return false;
};
export const removeDublicateWithinKDistance = (arr, k) => {
  /**
   * [1, 2, 3, 1, 4, 5]
   * [1, 2, 3, 4, 5]
   *
   * BF: iterate array i from 0 to length
   *        iterate array j from i to i+n
   *              if found same with arr[i] then remove it
   */


  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      arr.splice(i, 1);
      i--;
      continue;
    }
    for (let j = i + 1; j < i + k + 1; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
      }
    }
  }
  return arr;
};



export const zerosToEnd = (arr) => {
  /**
   * [1, 2, 3, 0, 0, 5]
   * [1, 2, 3, 5, 0, 0]
   *
   * iterate the array
   *    splice zeros
   *    counter++
   * iterate to the counter
   *    push zoer to newArray
   * return newArray
   *   
   */

   let counter=0;
   for(let i=0;i<arr.length;i++){
     if(arr[i]===0){
       arr.splice(i,1);
       counter++;
     }
   }
   for(let i=0;i<counter;i++){
     arr.push(0);
   }
   return arr;

  }


export const findMissingNumber = (arr, arr1) => {
/*
[1,3,4,5,6,9]
[3,5,6,9]

[1,4]

*/

  const hs = {};
  for (let i = 0; i < arr.length; i++) {
    if (hs[arr[i]]) hs[arr[i]]++;
    else hs[arr[i]] = 1;
  }

  for (let i = 0; i < arr1.length; i++) {
    hs[arr1[i]]--;
    if (hs[arr1[i]] === 0) {
      delete hs[arr1[i]];
    }
  }

  const result = [];
  for (let ket in hs) {
    result.push(parseInt(ket));
  }
  return result;

};
