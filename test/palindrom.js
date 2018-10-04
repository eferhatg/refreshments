import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { palindrome, palindromeWithoutReverse, longestPalindrome } from '../common_problems/palindrome';

chai.should();
chai.use(sinonChai);

describe('Palindrome', () => {
  it('should define function correctyl of palindrome', () => {
    (typeof (palindrome)).should.equal('function');
  });

  it('should define function correctyl of palindromeWithoutReverse', () => {
    (typeof (palindromeWithoutReverse)).should.equal('function');
  });

  it('should define function correctyl of palindromeWithoutReverse', () => {
    (typeof (longestPalindrome)).should.equal('function');
  });


  it('should determine if the word is palindrome or not with palindrome function', () => {
    palindrome('anna').should.equal(true);
    palindrome('palindrome').should.equal(false);
  });


  it('should determine if the word is palindrome or not with palindromeWithoutReverse function', () => {
    palindromeWithoutReverse('anana').should.equal(true);
    palindromeWithoutReverse('palindrome').should.equal(false);
  });

  it('should determine longestPalindrome', () => {
    longestPalindrome('sqelele').should.equal('elele');
  
  });
});
