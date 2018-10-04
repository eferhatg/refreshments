import chai from 'chai';
import { describe, it } from 'mocha';
import { histogram } from '../common_problems/histogram';

chai.should();

describe('Histogram', () => {
  it('should define function correctly', () => {
    (typeof (histogram)).should.equal('function');
  });

  it('should generate histogram', () => {
    let arr = [5, 4, 0, 3, 4, 1];
    histogram(arr).should.equal('*     \n**  * \n** ** \n** ** \n** ***\n******\n');
    arr = [7, 1, 4];
    histogram(arr).should.equal('*  \n*  \n*  \n* *\n* *\n* *\n***\n***\n');
  });
});