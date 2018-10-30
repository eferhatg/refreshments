import chai from 'chai';
import { describe, it } from 'mocha';
import {
  Iterator,
  Paginator,
  sort2dArray,
  getProductsOfAllIntsExceptAtIndex,
  commonElemsOfArrays,
  zeroSubSequence,
  twoSum,
  threeSum,
  fourSum,
  maxContinSubSet,
  trappingRainWater,
  increaseSplittedArray,
  secondMaxValue,
  reverseByOffset,
  removeDublicateWithinKDistance,
  findDublicateWithinKDistance,
  zerosToEnd,
  findMissingNumber,
  findNonRepeatingNumber
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

describe('twoSum', () => {
  it('should define function correctly', () => {
    (typeof (twoSum)).should.equal('function');
  });

  it('should find target pairs', () => {
    const arr = [2, 7, 3, 4, -2, -5];
    const target = 11;

    twoSum(arr, target).should.eql([7, 4]);
  });
});


describe('threeSum', () => {
  it('should define function correctly', () => {
    (typeof (threeSum)).should.equal('function');
  });

  it('should find target triplets', () => {
    const arr = [2, 7, 3, 4, -2, -5];
    const target = 9;
    threeSum(arr, target).should.eql([-2, 4, 7]);
  });
});


describe('fourSum', () => {
  it('should define function correctly', () => {
    (typeof (fourSum)).should.equal('function');
  });

  it('should find target quadruplets', () => {
    const arr = [2, 7, 3, 4, -2, -5];
    const target = 12;
    fourSum(arr, target).should.eql([-2, 3, 4, 7]);
  });
});

describe('maxContinSubSet', () => {
  it('should define function correctly', () => {
    (typeof (maxContinSubSet)).should.equal('function');
  });

  it('should find maximum continous subset', () => {
    const arr = [-2, -3, 4, -1, -2, 1, 5, -3];

    // maxContinSubSet(arr).should.equals(7);
    maxContinSubSet(arr).should.eql([4, -1, -2, 1, 5]);
  });
});


describe('trappingRainWater', () => {
  it('should define function correctly', () => {
    (typeof (trappingRainWater)).should.equal('function');
  });

  it('should find trapping rain water', () => {
    const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];


    trappingRainWater(arr).should.equals(6);
  });
});

describe('increaseSplittedArray', () => {
  it('should define function correctly', () => {
    (typeof (increaseSplittedArray)).should.equal('function');
  });

  it('should increase splitted array', () => {
    const arr = [1, 4, 2, 1];
    increaseSplittedArray(arr).should.eql([1, 4, 2, 2]);
    const arr2 = [1, 4, 2, 9];
    increaseSplittedArray(arr2).should.eql([1, 4, 3, 0]);
    const arr3 = [9, 9, 9, 9];
    increaseSplittedArray(arr3).should.eql([1, 0, 0, 0, 0]);
  });
});

describe('secondMaxValue', () => {
  it('should define function correctly', () => {
    (typeof (secondMaxValue)).should.equal('function');
  });

  it('should find second maximum number', () => {
    const arr = [1, 4, 2, 1];
    secondMaxValue(arr).should.equals(2);
    const arr1 = [1, 4, 4, 1];
    secondMaxValue(arr1).should.equals(1);
    const arr2 = [4, 4, 4, 4];
    secondMaxValue(arr2).should.equals(-Infinity);
  });
});

describe('reverseByOffset', () => {
  it('should define function correctly', () => {
    (typeof (reverseByOffset)).should.equal('function');
  });

  it('should reverse array by offset', () => {
    const arr = [1, 4, 2, 5, 20];
    const n = 2;
    reverseByOffset(arr, n).should.eql([2, 5, 20, 1, 4]);
  });
});


describe('removeDublicateWithinKDistance', () => {
  it('should define function correctly', () => {
    (typeof (removeDublicateWithinKDistance)).should.equal('function');
  });

  it('should remove dublicate within K distance', () => {
    let arr = [1, 2, 3, 1, 4, 5];
    let n = 3;
    removeDublicateWithinKDistance(arr, n).should.eql([1, 2, 3, 4, 5]);

    arr = [1, 2, 3, 4, 1, 2, 3, 4];
    n = 3;
    removeDublicateWithinKDistance(arr, n).should.eql([1, 2, 3, 4, 1, 2, 3, 4]);

    arr = [4, 4, 4, 4, 4, 4, 4, 4];
    n = 3;
    removeDublicateWithinKDistance(arr, n).should.eql([4]);

    arr = [1, 2, 3, 4, 5, 4];
    n = 3;
    removeDublicateWithinKDistance(arr, n).should.eql([1, 2, 3, 4, 5]);

    arr = [1, 2, 3, 4, 5];
    n = 3;
    removeDublicateWithinKDistance(arr, n).should.eql([1, 2, 3, 4, 5]);
  });
});

describe('zerosToEnd', () => {
  it('should define function correctly', () => {
    (typeof (zerosToEnd)).should.equal('function');
  });

  it('should add zeros to end', () => {
    let arr = [0, 2, 3, 0, 4, 5];
    let result = [2, 3, 4, 5, 0, 0];
    zerosToEnd(arr).should.eql(result);

  });
});

describe('findDublicateWithinKDistance', () => {
  it('should define function correctly', () => {
    (typeof (removeDublicateWithinKDistance)).should.equal('function');
  });

  it('should remove dublicate within K distance', () => {
    let arr = [1, 2, 3, 1, 4, 5];
    let n = 3;
    findDublicateWithinKDistance(arr, n).should.equals(true);

    arr = [1, 2, 3, 4];
    n = 3;
    findDublicateWithinKDistance(arr, n).should.eql(false);
  });
});


describe('findMissingNumber', () => {
  it('should define function correctly', () => {
    (typeof (findMissingNumber)).should.equal('function');
  });

  it('should find missing numbers', () => {
    let arr = [1, 2, 3, 1, 4, 5];
    const arr1 = [1, 2, 1, 4];
    findMissingNumber(arr, arr1).should.eql([3, 5]);
  });
});



describe('findNonRepeatingNumber', () => {
  it('should define function correctly', () => {
    (typeof (findNonRepeatingNumber)).should.equal('function');
  });

  it('should find non-repating number', () => {
    let arr = [1, 2, 3, 1, 4, 3, 2];

    findNonRepeatingNumber(arr).should.equal(4);
  });

  it('should find zero if non-repeating number doesnt exist', () => {
    let arr = [1, 2, 3, 1, 4, 3, 2,4];

    findNonRepeatingNumber(arr).should.equal(0);
  });
});
