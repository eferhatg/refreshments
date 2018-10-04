export const histogram = (arr) => {
  /*
  len = arr.length
  maxHeight= max of array
  create 2d with len and maxHeight
  compare each (height-rowIndex)=4 with height if height=3 is equal or bigger put * else put ' '

  [3,4,1]
  [[ * ],
   [** ],
   [** ],
   [***]]
  */

  const rowLength = Math.max(...arr);
  let result = '';
  for (let i = 0; i < rowLength; i += 1) {
    let str = '';
    for (let j = 0; j < arr.length; j += 1) {
      if (rowLength - i > arr[j]) {
        str += ' ';
      } else {
        str += '*';
      }
    }
    result += `${str}\n`;
  }
  return `${result}${new Array(arr.length).fill('*').join('')}\n`;
};
export const test = '';
