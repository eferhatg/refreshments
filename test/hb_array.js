import chai from 'chai';
import { describe, it } from 'mocha';
import { Iterator } from '../handbook/array';

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
