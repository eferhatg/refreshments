import chai from 'chai';
import {fromlast} from '../common_problems/fromlast';
import LinkedList from '../data_structures/linkedlist';

chai.should();


describe('FromLast',()=>{
  it('should define function correctly',()=>{
      (typeof(fromlast)).should.equal('function');
  });
  
  it('should find the element x from last',()=>{

    var n1=2;
    var n2=3;
    var n3=4;
    var n4=5;

    var linkedList=new LinkedList();
    linkedList.insert(n1);
    linkedList.insert(n2);
    linkedList.insert(n3);
    linkedList.insert(n4);
 
    
    fromlast(linkedList,2).should.equal(3);
  });
})