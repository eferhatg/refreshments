export const fromlast =(ll,n)=>{

  let slow=ll.head;
  let fast=ll.head;

  for(let i=0;i<n;i++){
    fast=fast.next
  }

  while(fast.next){
    slow=slow.next;
    fast=fast.next;
   
  }
  return slow.data;

}
