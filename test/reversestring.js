import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai'
import {reverseString,reverseStringWithReduce} from '../common_problems/reversestring';

chai.should();
chai.use(sinonChai);

describe('Reverse String',()=>{
  it('should defined function correctly',()=>{
    (typeof(reverseString)).should.equal('function');
  })

  it('should defined function correctly',()=>{
    (typeof(reverseStringWithReduce)).should.equal('function');
  })
  it('should reverse the given value correctly with reverseString',()=>{
    var val='reverse'
    reverseString(val).should.equal('esrever');
  })

  it('should reverse the given value correctly with reverseStringWithReducer',()=>{
    var val='reverse'
    reverseStringWithReduce(val).should.equal('esrever');
  })

  


})