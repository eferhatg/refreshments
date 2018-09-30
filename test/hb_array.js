import chai from 'chai';
import {Iterator} from '../handbook/array'
chai.should();


describe('Iterator',()=>{
  it('should define function correctly',()=>{
    (typeof(Iterator)).should.equal('function')

  })

  it('should get next element',()=>{
    let arr=[1,2,3];
    let itr=new Iterator(arr);
    itr.next().should.equal(2);
    itr.next().should.equal(3);
    (typeof(itr.next())).should.equal('undefined');
  });

  it('should check if hastNext',()=>{
    let arr=[1,2,3];
    let itr=new Iterator(arr);
    itr.hasNext().should.equal(true);
    itr.next();
    itr.hasNext().should.equal(true);
    itr.next();
    itr.hasNext().should.equal(false);
  });
  
  it('should remove element',()=>{
    let arr=[1,2,3];
    let itr=new Iterator(arr);
    itr.hasNext().should.equal(true);
    itr.next();
    itr.hasNext().should.equal(true);
    itr.next();
    itr.hasNext().should.equal(false);
  });

});