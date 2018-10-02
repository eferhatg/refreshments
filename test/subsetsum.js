import chai from 'chai';
import { describe, it } from 'mocha';
import { hasSubSumDP, hasSubSumRecursive } from '../common_problems/subsetsum';

chai.should();

describe('hasSubSumRecursive', () => {
  it('should determine if a sum is subset of array', () => {
    (typeof (hasSubSumRecursive)).should.equal('function');
  });

  it('should return true if subsets has sum', () => {
    const arr = [3, 34, 4, 12, 5, 2];
    const sum = 9;
    hasSubSumRecursive(arr, arr.length, sum).should.equal(true);
  });

  it('should return false if subsets has not sum', () => {
    const arr = [3, 34, 4, 12, 40, 20];
    const sum = 9;
    hasSubSumRecursive(arr, arr.length, sum).should.equal(false);
  });
});


describe('hasSubSumDynamicProgramming', () => {
  it('should determine if a sum is subset of array', () => {
    (typeof (hasSubSumDP)).should.equal('function');
  });

  it('should return true if subsets has sum', () => {
    const arr = [3, 34, 4, 12, 5, 2];
    const sum = 9;
    hasSubSumDP(arr, arr.length, sum).should.equal(true);
  });

  it('should return false if subsets has not sum', () => {
    const arr = [3, 34, 4, 12, 40, 20];
    const sum = 9;
    hasSubSumDP(arr, arr.length, sum).should.equal(false);
  });
});

// describe('perfectSubSetSum', () => {
//   it('should determine if a sum is subset of array', () => {
//     (typeof (perfectSubSet)).should.equal('function');
//   });

//   it('should return subsets with given sum', () => {
//     const arr = [3, 34, 4, 12, 5, 2];
//     const sum = 9;
//     perfectSubSet(arr, arr.length, sum).should.eql([[3, 4, 2], [5, 4]]);
//   });
// });
