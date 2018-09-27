export const reverseString=(val)=>{
    var newString=[];
    for (let i = 0; i < val.length; i++) {
      const element = val.charAt(i);
      newString.unshift(element);
    }
  return newString.join('');
}

export const reverseStringWithReduce=(val)=>{
  return val.split('').reduce((rev,char)=>{return char+rev;});
}
