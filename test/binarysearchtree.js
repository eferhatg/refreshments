import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai'
import BinarySearchTree from '../data_structures/binarysearchtree';


chai.should();
chai.use(sinonChai);

describe('Binary Tree', () => {

  let bts;
  beforeEach('generating binarytree', () => {
    bts = new BinarySearchTree();
    bts.insert(4);
    bts.insert(2);
    bts.insert(6);
    bts.insert(16);
    bts.insert(26);
    bts.insert(1);
  });

  it('should define function correctly', () => {
    (typeof (BinarySearchTree)).should.equal('function');
  })

  describe('#insert', () => {
    it('should add some numbers (be sure bts is full)', () => {

      bts.root.data.should.equal(4);
      bts.root.left.data.should.equal(2);
      bts.root.left.left.data.should.equal(1);
      bts.root.right.right.right.data.should.equal(26);
      bts.root.right.data.should.equal(6);

    });
  })



  describe('#contains', () => {
    it('should determine if bts contains a value or not', () => {
      var val = 26;
      bts.contains(val).should.equal(true);
      val = 15;
      bts.contains(val).should.equal(false);
      val = 4;
      bts.contains(val).should.equal(true);
    })
  });

  describe('#traverseBF', () => {
    it('should execute a Breath First Traversal', () => {
      bts.traverseBF().should.eql([4,2,6,1,16,26]);

    })
  });
-

  describe('#traverseInOrder', () => {
    it('should execute a InOrder Traversal', () => {
      bts.traverseInOrder().should.eql([1,2,4,6,16,26]);
    })
  });

  describe('#traversePreOrder', () => {
    it('should execute a PreOrder Traversal', () => {
      bts.traversePreOrder().should.eql([4,2,1,6,16,26]);
    })
  });

  describe('#traversePostOrder', () => {
    it('should execute a PostOrder Traversal', () => {
      bts.traversePostOrder().should.eql([1,2,26,16,6,4]);
    })
  });
  describe('#MinMaxValue', () => {
    it('should find the minimum value', () => {
      bts.minValue().should.equal(1);
    })
    it('should find the maximum value', () => {
      bts.maxValue().should.equal(26);
    })
  });

  describe('#Height', () => {
    it('should find the height of tree', () => {
      bts.height().should.equal(3);
      bts.insert(55);
      bts.height().should.equal(4);
    })
    
  });

  // describe('#Validate', () => {
  //   it('should validate the three', () => {
  //     bts.validate().should.equal(true);
  //   })
    
  // });

  describe('#CountLeaves', () => {
    it('should find the counts of leaves', () => {
      bts.countLeaves().should.equal(2);
      bts.insert(5);
      bts.countLeaves().should.equal(3);
    })
    
  });
  

});