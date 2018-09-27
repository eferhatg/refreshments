import chai from 'chai';
import {circularlinkedlist} from '../common_problems/circularlinkedlist';
import LinkedList from '../data_structures/linkedlist';

chai.should();


describe('Circularlinkedlist',()=>{
  it('should define function correctly',()=>{
      (typeof(circularlinkedlist)).should.equal('function');
  });
  
  it('should determine if linkedlist is circular',()=>{

    var n1=2;
    var n2=3;
    var n3=4;
    var n4=5;

    var linkedList=new LinkedList();
    linkedList.insert(n1);
    linkedList.insert(n2);
    linkedList.insert(n3);
    linkedList.insert(n4);
    linkedList.head.next.next.next.next=linkedList.head.next;
    
    circularlinkedlist(linkedList).should.equal(true);
  });
  
  it('should determine if linkedlist is not circular',()=>{

    var n1=2;
    var n2=3;
    var n3=4;
    var n4=5;

    var linkedList=new LinkedList();
    linkedList.insert(n1);
    linkedList.insert(n2);
    linkedList.insert(n3);
    linkedList.insert(n4);
   
    
    circularlinkedlist(linkedList).should.equal(false);
  });
})