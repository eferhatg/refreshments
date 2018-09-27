export const steps=(n)=>{
  var str='';
    for (let i = 1; i <= n; i++) {
        let spaces=Array(n-i).fill(' ').join('');
        let sharps=Array(i).fill('#').join('');
        str+=sharps+spaces+'\n';

        
    }
    return str;
}

var globalstr='';
export const stepsRecursive=(n,i=1)=>{
  let spaces=Array(n-i).fill(' ').join('');
  let sharps=Array(i).fill('#').join('');
  globalstr+=sharps+spaces+'\n';

  if(n>i){
    stepsRecursive(n,i+1);
  }
  return globalstr;
}