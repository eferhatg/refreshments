export const reverseint=(val)=>{
  let sign=Math.sign(val);
  return parseInt(val.toString().split('').reverse().join(''))*sign;
}