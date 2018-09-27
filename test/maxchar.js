import chai from 'chai';
import {maxchar} from '../common_problems/maxchar';


chai.should();


describe('MaxChar',()=>{
  it('should define function correctly',()=>{
      (typeof(maxchar)).should.equal('function');
  });
  it('should calculate max char of "gooogle!!" correctly',()=>{
    maxchar('gooogle!!').should.equal('o');
  });

})