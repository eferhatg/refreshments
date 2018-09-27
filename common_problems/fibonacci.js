export const memoize=fn=>{
  const cache={};
  return (...args)=>{
      if(cache[args]){
        return cache[args];
      }
      var result=fn.apply(this,args);
      cache[args]=result;
      return result;
  }
}

// export function memoize(func) {
//   var memo = {};
//   var slice = Array.prototype.slice;

//   return function() {
//     var args = slice.call(arguments);

//     if (args in memo)
//       return memo[args];
//     else
//       return (memo[args] = func.apply(this, args));

//   }
// }


export const fibonacci=(n)=> {
    if(n<2){
      return n;
    }
    return fibonacci(n-1)+fibonacci(n-2); 
  }

export const memoFib=memoize(fibonacci);


