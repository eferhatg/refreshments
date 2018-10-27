import chai from 'chai';
import { anglesbetweenhourandmin } from '../common_problems/anglesbetweenhourandmin';

describe('overlaprectangles', () => {
  it('should define function correctly', () => {
    (typeof (anglesbetweenhourandmin)).should.equal('function');
  });
  it('should calculate angles between hour and min', () => {
    const h = 3;
    const m = 30;
    anglesbetweenhourandmin(h, m).should.equal(75);
  });
});
