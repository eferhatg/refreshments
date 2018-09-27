import chai from 'chai';
import {Stack} from '../data_structures/stack'
chai.should();

var s;
beforeEach('generating binarytree', () => {
  s= new Stack();
  s.add(1)
  s.add(2)
  s.add(3)
  s.add(4)

});

describe('Stack',()=>{
  it('should define function correctly',()=>{
      (typeof(Stack)).should.equal('function');
  })

  it('should add value',()=>{
    
    var qq=s.data;
    qq[0].should.equal(1);
    qq[3].should.equal(4);
      
  })

  it('should remove value',()=>{
    var qq=s.data;
    qq.length.should.equal(4);
    s.remove().should.equal(4);
    qq.length.should.equal(3);

    
})
it('should return peek value',()=>{

  s.peek().should.equal(4);

  
})

// it('should weave two queues ',()=>{

//   var newq=new Queue();
//   newq.add('A');
//   newq.add('B');
//   newq.add('C');
//   newq.add('D');
//   newq.add('E');
//   newq.add('F');

//   var resultArr=[1,'A',2,'B',3,'C',4,'D','E','F']

//   q.weave(q,newq).queue.should.eql(resultArr);

  
// })

})