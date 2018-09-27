export const palindrome=(val)=>{
  return val===val.split('').reduce((rev,char)=>{return char+rev;})
}

export const palindromeWithoutReverse=(val)=>{
  return val.split('').every((c,i)=>{return val.charAt(val.length-1-i)==c;})
}