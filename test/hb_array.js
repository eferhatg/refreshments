import chai from 'chai';
import { describe, it } from 'mocha';
import { Iterator, Paginator } from '../handbook/array';

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
