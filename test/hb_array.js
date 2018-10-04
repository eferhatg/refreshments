import chai from 'chai';
import { describe, it } from 'mocha';
import {
  Iterator,
  Paginator,
  sort2dArray,
  getProductsOfAllIntsExceptAtIndex,
  commonElemsOfArrays,
  zeroSubSequence,
} from '../handbook/array';

chai.should();


describe('Iterator', () => {
  it('should define function correctly', () => {
    (typeof (Iterator)).should.equal('function');
  });

  it('should get next element', () => {
    const arr = [1, 2, 3];
    const itr = new Iterator(arr);
    itr.next().should.equal(2);
    itr.next().should.equal(3);
    (typeof (itr.next())).should.equal('undefined');
  });

  it('should check if hastNext', () => {
    const arr = [1, 2, 3];
    const itr = new Iterator(arr);
    itr.hasNext().should.equal(true);
    itr.next();
    itr.hasNext().should.equal(true);
    itr.next();
    itr.hasNext().should.equal(false);
  });

  it('should remove element', () => {
    const arr = [1, 2, 3];
    const itr = new Iterator(arr);
    itr.hasNext().should.equal(true);
    itr.next();
    itr.hasNext().should.equal(true);
    itr.next();
    itr.hasNext().should.equal(false);
  });
});

describe('Paginator', () => {
  it('should define function correctly', () => {
    (typeof (Paginator)).should.equal('function');
  });

  it('should paginate array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const pgntr = new Paginator(arr);
    pgntr.paginate(3, 2).should.eql([4, 5, 6]);
    pgntr.paginate(4, 1).should.eql([1, 2, 3, 4]);
    pgntr.paginate(4, 4).should.eql([13]);
    pgntr.paginate(4, 5).should.eql([]);
  });
});

describe('Sort2DArray', () => {
  it('should define function correctly', () => {
    (typeof (sort2dArray)).should.equal('function');
  });

  it('should sort inner arrays asc and sort outer arrays to sums', () => {
    const arr = [[13, 9, 18], [4, 2, 1, 0], [21, 5, 100]];
    sort2dArray(arr).should.eql([[0, 1, 2, 4], [9, 13, 18], [5, 21, 100]]);
  });
});

describe('getProductsOfAllIntsExceptAtIndex', () => {
  it('should define function correctly', () => {
    (typeof (getProductsOfAllIntsExceptAtIndex)).should.equal('function');
  });

  it('should getProductsOfAllIntsExceptAtIndex', () => {
    const arr = [1, 7, 3, 4];
    getProductsOfAllIntsExceptAtIndex(arr).should.eql([84, 12, 28, 21]);
  });
});

describe('commonElemsOfArrays', () => {
  it('should define function correctly', () => {
    (typeof (commonElemsOfArrays)).should.equal('function');
  });

  it('should find commonElemsOfArrays', () => {
    let arr = [2, 7, 3, 4];
    let arr1 = [12, 7, 13, 4];
    commonElemsOfArrays(arr, arr1).should.eql([7, 4]);
    arr1 = [12];
    commonElemsOfArrays(arr, arr1).should.eql([]);
    arr1 = [2];
    commonElemsOfArrays(arr, arr1).should.eql([2]);
    arr1 = [];
    arr = [];
    commonElemsOfArrays(arr, arr1).should.eql([]);
  });
});

describe('zeroSubSequence', () => {
  it('should define function correctly', () => {
    (typeof (zeroSubSequence)).should.equal('function');
  });

  it('should find zeroSubSequence', () => {
    let arr = [2, 7, 3, 4, -2, -5];

    zeroSubSequence(arr).should.eql([3, 4, -2, -5]);

    arr = [1, -2, 3, 5, -8, -1];
    zeroSubSequence(arr).should.eql([3, 5, -8]);
  });
});
