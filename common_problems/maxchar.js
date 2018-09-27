export const maxchar=(str)=>{
  
  let charMap={};   
  let max=0;
  let maxCharacter='';

  for(let char of str){
    if(!charMap[char]) charMap[char]=1;
    else charMap[char]++;
  }

  for(let char in charMap){
    if(charMap[char]>max) {
      maxCharacter=char;
      max=charMap[char];
    }
  }

  return maxCharacter;
}