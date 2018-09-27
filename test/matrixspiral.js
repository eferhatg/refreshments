import chai from 'chai';
import {matrixspiral} from '../common_problems/matrixsprial'
chai.should();


describe('MatrixSpiral',()=>{
  it('should define functions correctly',()=>{
    (typeof(matrixspiral)).should.equal('function');

  })

  it('should generate matrix spiral correctly',()=>{
    matrixspiral(4).should.eql([[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]);

  })


 
})