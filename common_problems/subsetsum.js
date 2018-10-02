
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


/*


PERFECT SUBSET SUM


*/

// let dp = [];
// const result = [];
// const dpArray = (arr, n, sum) => {
//   const set = new Array(n + 1).fill(null).map(() => new Array(n + 1).fill(null));

//   for (let i = 0; i <= n; i += 1) {
//     set[i][0] = true;
//   }

//   for (let i = 1; i <= sum; i += 1) {
//     set[0][i] = false;
//   }

//   for (let i = 1; i <= n; i += 1) {
//     for (let j = 1; j <= sum; j += 1) {
//       if (arr[i - 1] > j) {
//         set[i][j] = set[i - 1][j];
//       }
//       if (j >= arr[i - 1]) {
//         if (set[i - 1][j]) {
//           set[i][j] = true;
//         } else {
//           set[i][j] = set[i - 1][j - arr[i - 1]];
//         }
//       }
//     }
//   }
//   return set;
// };

// const getSubSets = (arr, i, sum, hashset) => {
//   if (i === 0 && sum !== 0 && dp[0][sum]) {
//     hashset.push(arr[i]);
//     result.push(hashset);
//     return;
//   }
// };


// const perfectSubSet = (arr, n, sum) => {
//   dp = dpArray(arr, n, sum);
//   if (!set[n][sum]) return [];
// };
