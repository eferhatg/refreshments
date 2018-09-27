export const anagrams=(strA,strB)=>{

  let A= strA.replace(/[^A-Za-z0-9_]/g,"").replace(" ","").toLowerCase().split('');
  let B= strB.replace(/[^A-Za-z0-9_]/g,"").replace(" ","").toLowerCase().split('');

  if(B.length!==A.length){return false;}

  for (let i = 0; i < A.length; i++) {
      var c=A.pop();
      var bix=B.indexOf(c);

      if(bix===-1){
        return false;
      }      
      B.splice(bix,1);  
  
  }
  return true;


}