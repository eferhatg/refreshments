export const BubbleSort=(arr)=>{

  for(let i=0;i<arr.length;i++){
    
    for(let j=0;j<arr.length-i-1;j++){
   
      if(arr[j]>arr[j+1]){
        let temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;        
      }
    }
  }
  return arr;


}

export const SelectionSort=(arr)=>{
  /*
    * iterate the loop and select ith element
    * iterate a nested loop and look the other elements are smaller than ith
      * if smaller than keep its index to the end of loop
    * swap ith element with smaller one
  */

  var minIx=-1;

  for(let i=0;i<arr.length;i++){

    minIx=i;

    for(let j=i+1;j<arr.length;j++){
      if(arr[minIx]>arr[j]){
        minIx=j;
      }
    }

    if(i!==minIx){
      let temp=arr[i];
      arr[i]=arr[minIx];
      arr[minIx]=temp;
    }

  }

  return arr;



}


export const MergeSort=(arr)=>{
  
  if(arr.length<2){
    return arr;
  }

  let center=Math.floor(arr.length/2);
  let left=arr.slice(0,center);
  let right=arr.slice(center);
  return Merger(MergeSort(left),MergeSort(right));


}


export const Merger=(left,right)=>{
  let results=[];
 
  while(left.length&&right.length){
    if(left[0]<right[0]){
      results.push(left.shift());
    }else{
      results.push(right.shift())
    }
  } 

  return [...results,...left,...right];
}