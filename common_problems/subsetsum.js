
export const hasSubSumRecursive = (arr, n, sum) => {
  if (sum === 0) {
    return true;
  }

  if (sum !== 0 && n === 0) {
    return false;
  }

  if (arr[n - 1] > sum) {
    return hasSubSumRecursive(arr, n - 1, sum);
  }

  return hasSubSumRecursive(arr, n - 1, sum) || hasSubSumRecursive(arr, n - 1, sum - arr[n - 1]);
};


export const hasSubSumDP = (arr, n, sum) => {
  const set = new Array(n + 1).fill(null).map(() => new Array(n + 1).fill(null));

  for (let i = 0; i <= n; i += 1) {
    set[i][0] = true;
  }

  for (let i = 1; i <= sum; i += 1) {
    set[0][i] = false;
  }

  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= sum; j += 1) {
      if (arr[i - 1] > j) {
        set[i][j] = set[i - 1][j];
      }
      if (j >= arr[i - 1]) {
        if (set[i - 1][j]) {
          set[i][j] = true;
        } else {
          set[i][j] = set[i - 1][j - arr[i - 1]];
        }
      }
    }
  }
  return set[n][sum];
};

export const findAllSubsets = (arr) => {
  const dublicateRemover = {};
  // removing dublicate
  for (let i = 0; i < arr.length; i += 1) {
    dublicateRemover[arr[i]] = true;
  }

  const uniqueArr = Object.keys(dublicateRemover);

  const result = [[]];

  for (let i = 0; i < uniqueArr.length; i += 1) {
    const len = result.length;
    for (let j = 0; j < len; j += 1) {
      result.push(result[j].concat(parseInt(uniqueArr[i], 10)));
    }
  }
  return result;
};
