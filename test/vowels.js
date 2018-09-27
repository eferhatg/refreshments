import chai from 'chai';
import {vowels} from '../common_problems/vowels'
chai.should();


describe('Vowels',()=>{
  it('should define functions correctly',()=>{
    (typeof(vowels)).should.equal('function');

  })

  it('should count vowels in a sentence correctly',()=>{
    var str='HEllo World!';

    vowels(str).should.equal(3);

  })
})