import chai from 'chai';
import {capitalize} from '../common_problems/capitalize'
chai.should();


describe('Capitalize',()=>{
  it('should define function correctly',()=>{
    (typeof(capitalize)).should.equal('function')

  })

  it('should capitalize the sentence',()=>{
    var sentence='hello world';

    capitalize(sentence).should.equal('Hello World');

  })

  it('should capitalize the sentence with multiple spaces',()=>{
    var sentence='hello   world';

    capitalize(sentence).should.equal('Hello   World');

  })
})