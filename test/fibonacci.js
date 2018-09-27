import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai'
import {fibonacci,memoFib} from '../common_problems/fibonacci';

chai.should();
chai.use(sinonChai);

describe('Fibonacci',()=>{
  it('should defined function correctly',()=>{
    (typeof(fibonacci)).should.equal('function');
  })

  it('should calculates correct value for 35',()=>{
    var n=30
    fibonacci(n).should.equal(832040);
  })

  it('should calculates correct value for 35 faster than original function',()=>{
    var n=30
    memoFib(n).should.equal(832040);
  })
})