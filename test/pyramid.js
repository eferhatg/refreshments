import chai from 'chai'
import {pyramid} from '../common_problems/pyramid'
chai.should();

describe('pyramid',()=>{
  it('should define function correctly',()=>{
      (typeof(pyramid)).should.equal('function');
  })

  it('should generate a pyramid by step count(n)',()=>{
      let n=3;
      pyramid(n).should.equal('  #  \n ### \n#####\n');
  })

})