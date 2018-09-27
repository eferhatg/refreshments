export const chunkarray = (arr, size) => {

  if(size===0||arr.length===0){
    return [];
  }
  var arrlen=arr.length;
  var chunkedCount = parseInt(arr.length / size) + 1;
  var chunkedArr=[];

  for (let i = 0; i < chunkedCount; i++) {
      if((i*size)>arrlen){
        size=(arr.length%size);
      }
      var temp=arr.splice(0,size);
      chunkedArr.push(temp);
      
  }

  return chunkedArr;
}