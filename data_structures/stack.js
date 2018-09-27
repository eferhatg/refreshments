export class Stack {

  constructor(){
    this.data=[];
  }
 
  add(val){
     this.data.push(val);
  }
 
  remove(){
     return  this.data.pop();
     //this.queue.splice(-1,1);
  }
 
  peek(){
   return  this.data.length===0?null:this.data[this.data.length-1];
   //this.queue.splice(-1,1);
 }
 
//  weave(q1,q2){
     
   
//    var newq=new Queue();
//      while(q1.data.length>0||q2.queue.length>0){
//        if(q1.queue.length>0){
//          newq.add(q1.remove());
//        }
//        if(q2.queue.length>0){
//          newq.add(q2.remove());
//        }
       
//      }
//      return newq;
//    }
 
 }