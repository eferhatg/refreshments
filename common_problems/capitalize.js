export const capitalize=(sentence)=>{

  var words=sentence.split(' ');
  var capitalArr=[]; 
  for (let i = 0; i < words.length; i++) {

    if(words[i].trim()=='') {
      capitalArr.push(words[i]);
      continue;
    
    }    
    capitalArr.push(words[i][0].toUpperCase()+words[i].slice(1));    
 
  }
return capitalArr.join(' ');

}