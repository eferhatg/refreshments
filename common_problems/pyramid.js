export const pyramid=(n)=>{
  let pyrStr='';

  if(n==1) return '#';

  var rowCount=n;
  var colCount=(n-1)+n;


  
  for (let i = 0; i < rowCount; i++) {
      let row=Array(colCount).fill(' ');

      let middle=Math.floor(colCount/2);
 
      let startIndex=middle-i;
      let endIndex=middle+i;
      for(let j=startIndex;j<=endIndex;j++){
        row[j]='#';
      }
      pyrStr+=row.join('')+'\n';

  }
  return pyrStr;

  
  
}  