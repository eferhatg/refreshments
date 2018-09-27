
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai'
import LinkedList from '../data_structures/linkedlist';


chai.should();
chai.use(sinonChai);



describe('LinkedList', ()=> {
  it('should insert some numbers (2,3)', ()=> {
    
    var n1=2;
    var n2=3;

    var linkedList=new LinkedList();
    linkedList.insert(n1);
    linkedList.insert(n2);

    linkedList.head.data.should.equal(n1);
    linkedList.head.next.data.should.equal(n2); 
    linkedList.size.should.equal(2);

  });

  it('should throw error when inserting null value ',()=>{

    var nVal=null;
    var linkedList=new LinkedList();
    (()=>linkedList.insert(nVal)).should.throw('value can not be null');

  });

  it('should insert node at the head',()=>{

    var n1=2;
    var n2=3;

    var linkedList=new LinkedList();
    linkedList.insertToHead(n1);
    linkedList.insertToHead(n2);

    linkedList.head.data.should.equal(n2);
    linkedList.size.should.equal(2);
  })

  it('should get node at spesific position',()=>{

    var position=2;
    var linkedList=new LinkedList();
    linkedList.insert(4);
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);

    var node=linkedList.getNodeAtPosition(position);

    node.data.should.equal(2);

  })

  it('#getNodeAtPosition should throw error if position is bigger or smaller than size',()=>{
    var position=2;
    var linkedList=new LinkedList();
    linkedList.insert(4);
    linkedList.insert(3);
    (()=>linkedList.getNodeAtPosition(position)).should.throw('Position can not be out of size');
    
  })

  it('should insert node at spesific position',()=>{

    var val=0;
    var position=2;
    var linkedList=new LinkedList();
    linkedList.insert(4);
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);

    linkedList.insertToPosition(val,position);

    linkedList.getNodeAtPosition(2).data.should.equal(0);

  })

  it('should delete node at spesific position',()=>{

    var val=0;
    var position=2;
    var linkedList=new LinkedList();
    linkedList.insert(4);
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);

    linkedList.deleteFromPosition(val,position);

    linkedList.getNodeAtPosition(2).data.should.equal(1);
    
  })

  it('should reverse the list',()=>{

    var linkedList=new LinkedList();
    linkedList.insert(4);
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);

    linkedList.reverse();

    linkedList.getNodeAtPosition(0).data.should.equal(1);
    
  })

  it('should return the midpoint of list',()=>{

    var linkedList=new LinkedList();
    linkedList.insert(4);
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);


    linkedList.midpoint().data.should.equal(3);
    linkedList.insert(5);
    linkedList.midpoint().data.should.equal(2);
    linkedList.insert(7);
    linkedList.midpoint().data.should.equal(2);
    linkedList.insert(8);
    linkedList.midpoint().data.should.equal(1);

    
  })

});