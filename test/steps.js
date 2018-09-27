import chai from 'chai';
import {steps,stepsRecursive} from '../common_problems/steps'
chai.should();


describe('Steps',()=>{
  it('should define functions correctly',()=>{
    (typeof(steps)).should.equal('function');
    (typeof(stepsRecursive)).should.equal('function');
  })


  it('should generate steps',()=>{
    var n=3;
    var result='#  \n## \n###\n'
 
    steps(n).should.equal(result);
  })
  it('should generate stepsRecursive',()=>{
    var n=3;
    var result='#  \n## \n###\n'
 
    stepsRecursive(n).should.equal(result);
  })

});