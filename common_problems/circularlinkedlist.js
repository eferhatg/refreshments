export const circularlinkedlist =(linkedlist)=>{

  let slow=linkedlist.head;
  let fast=linkedlist.head;

  while(fast.next&&fast.next.next){
    slow=slow.next;
    fast=fast.next.next;

    if(slow===fast){
      return true;
    }
   
  }
  return false;

}