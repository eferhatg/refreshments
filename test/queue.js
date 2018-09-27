import chai from 'chai';
import {Queue} from '../data_structures/queue'
chai.should();

var q;
beforeEach('generating binarytree', () => {
  q= new Queue();
  q.add(1)
  q.add(2)
  q.add(3)
  q.add(4)

});

describe('Queue',()=>{
  it('should define function correctly',()=>{
      (typeof(Queue)).should.equal('function');
  })

  it('should add value',()=>{
    console.log(q);
    var qq=q.queue;
    qq[0].should.equal(1);
    qq[3].should.equal(4);
      
  })

  it('should remove value',()=>{
    var qq=q.queue;
    qq.length.should.equal(4);
    q.remove().should.equal(1);
    qq.length.should.equal(3);

    
})
it('should return peek value',()=>{

  q.peek().should.equal(1);

  
})

it('should weave two queues ',()=>{

  var newq=new Queue();
  newq.add('A');
  newq.add('B');
  newq.add('C');
  newq.add('D');
  newq.add('E');
  newq.add('F');

  var resultArr=[1,'A',2,'B',3,'C',4,'D','E','F']

  q.weave(q,newq).queue.should.eql(resultArr);

  
})

})