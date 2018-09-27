export const vowels=(str)=>{
  var vowelletters='aeiou';
  var vowelcount=0;
  for(let c of str.toLowerCase()){
    vowelletters.includes(c)&&vowelcount++;
  }
  return vowelcount;
}

// Second Way to find vowels with regex
// export const vowels=(str)=>{
//   var matches=str.match(/[aeiou]/gi);
//   return matches?matches.length:0;
// }

