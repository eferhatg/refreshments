export class Queue {

 constructor(){
   this.queue=[];
 }

 add(val){
    this.queue.push(val);
 }

 remove(){
    return  this.queue.shift();
    //this.queue.splice(-1,1);
 }

 peek(){
  return  this.queue.length===0?null:this.queue[0];
  //this.queue.splice(-1,1);
}

weave(q1,q2){
    
  
  var newq=new Queue();
    while(q1.queue.length>0||q2.queue.length>0){
      if(q1.queue.length>0){
        newq.add(q1.remove());
      }
      if(q2.queue.length>0){
        newq.add(q2.remove());
      }
      
    }
    return newq;
  }

}