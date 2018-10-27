import chai from 'chai';
import { overlaprectangles } from '../common_problems/overlaprectangles';

describe('overlaprectangles', () => {
  it('should define function correctly', () => {
    (typeof (overlaprectangles)).should.equal('function');
  });
  it('should calculate if rectangles are overlap or not', () => {
    let l1 = [0, 10];
    let r1 = [10, 0];
    let l2 = [5, 5];
    let r2 = [15, 0];
    overlaprectangles(l1, r1, l2, r2).should.equal(false);
    l1 = [0, 10];
    r1 = [10, 0];
    l2 = [15, 15];
    r2 = [25, 25];
    overlaprectangles(l1, r1, l2, r2).should.equal(true);
  });
});
