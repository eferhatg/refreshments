import chai from 'chai';
import {reverseint} from '../common_problems/reverseint';


chai.should();


describe('ReverseInt',()=>{
  it('should define function correctly',()=>{
      (typeof(reverseint)).should.equal('function');
  });
  it('should reverse value of 15 correctly',()=>{
    reverseint(15).should.equal(51);
  });

  it('should reverse value of -22 correctly',()=>{
    reverseint(-22).should.equal(-22);
  });
  
  it('should reverse value of -200 correctly',()=>{
    reverseint(-200).should.equal(-2);
  });
})