
export  class Node {
  constructor(data){
    this.data=data;
    this.next=null;
  }
}

export default class LinkedList {
  constructor(){
    this.head=null;
    this.size=0;
  }

  insert(val){
    if(val==null){
      throw new Error('value can not be null');
    }

    if(this.head==null){
      this.head=new Node(val);
    } else {
      let current=this.head;
      while(current.next!=null){
        current=current.next;
      }
      current.next=new Node(val);
    }
    this.size++;
    return this.head;
  }

  
  insertToHead(val){

    if(this.head==null){
      this.head=new Node(val);
     
    }else {
      let newHead=new Node(val);      
      newHead.next=this.head;
      this.head= newHead;
    }
    this.size++;
    return this.head;
    
  }

  getNodeAtPosition(position){
    var current=this.head;
    var currentPosition=0;

    if(position<0||position>=this.size){
      throw new Error('Position can not be out of size');
    }

    while(currentPosition<position){
      current=current.next;
      currentPosition++;
    }

    return current;
    
  }


  insertSpesific(head,val,position){
    var tempNode=new Node(val);
 
    if(position==0){
      tempNode.next=head;
      return tempNode;
    }else{
      head.next=this.insertSpesific(head.next,val,position-1);
    }
    return head;
  }


  insertToPosition(val,position){
    if(position<0||position>=this.size){
      throw new Error('Position can not be out of size');
    }
    this.size++;
   return this.insertSpesific(this.head,val,position);
    
  }


  deleteSpesific(head,val,position){
  
    if(position==0){
      head=head.next;
    }else{
      head.next=this.deleteSpesific(head.next,val,position-1);
    }
    return head;
  }


  deleteFromPosition(val,position){
    if(position<0||position>=this.size){
      throw new Error('Position can not be out of size');
    }
    this.size--;
   return this.deleteSpesific(this.head,val,position);
    
  }


  reverseList(head){
  
    var curr=head;
    var prev=null;
    var next=null;

    while(curr!=null){
      next=curr.next;
      curr.next=prev;
      prev=curr;
      curr=next;
    }

    return prev;
  }

  reverse(){
   this.head= this.reverseList(this.head);
  }

  midpoint(){
    
    let slow=this.head;
    let fast=this.head;

    while(fast.next&&fast.next.next){
      slow=slow.next;
      fast=fast.next.next;
    }
    return slow;

  }




}




