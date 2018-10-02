import chai from 'chai';
import { describe, it } from 'mocha';
import { hasSubSumDP, hasSubSumRecursive, findAllSubsets } from '../common_problems/subsetsum';

chai.should();

describe('hasSubSumRecursive', () => {
  it('should be a function', () => {
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
  it('should be a function', () => {
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

describe('findAllSubsets', () => {
  it('should be a function', () => {
    (typeof (findAllSubsets)).should.equal('function');
  });

  it('should return subsets with given sum', () => {
    const arr = [3, 5, 4];
    findAllSubsets(arr).should.eql([[], [3], [4], [3, 4], [5], [3, 5], [4, 5], [3, 4, 5]]);
  });
});
