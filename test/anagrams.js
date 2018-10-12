import chai from 'chai';
import { anagrams } from '../common_problems/anagrams';

chai.should();


describe('Anagram', () => {
  it('should define function correctly', () => {
    (typeof (anagrams)).should.equal('function');
  });

  it('should determine two strings is anagram or not', () => {
    const strA = 'RAIL SAFETY!';
    let strB = 'fairy tales';
    anagrams(strA, strB).should.equal(true);
    strB = 'fairy talese';
    anagrams(strA, strB).should.equal(false);
  });

  it('should determine two strings is anagram or not with punctuations', () => {
    const strA = '#+[}punc!';
    const strB = 'u#+c[}np!';
    anagrams(strA, strB).should.equal(true);
  });
  it('should return false if string lengths are not equal', () => {
    const strA = '#re!';
    const strB = '#!';
    anagrams(strA, strB).should.equal(false);
  });
});
