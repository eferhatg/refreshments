import chai from 'chai';
import {BubbleSort,SelectionSort,MergeSort,Merger} from '../common_problems/sorting'
chai.should();


describe('BubbleSort',()=>{
  it('should define functions correctly',()=>{
    (typeof(BubbleSort)).should.equal('function');

  })

  it('should sort array',()=>{
    let arr=[4,2,18,11,1,-1];

    BubbleSort(arr).should.eql([-1,1,2,4,11,18]);

  })


 
})

describe('SelectionSort',()=>{
  it('should define functions correctly',()=>{
    (typeof(BubbleSort)).should.equal('function');

  })

  it('should sort array',()=>{
    let arr=[4,2,18,11,1,-1];

    SelectionSort(arr).should.eql([-1,1,2,4,11,18]);

  })


 
})

describe('MergeSort',()=>{
  it('should define functions correctly',()=>{
    (typeof(BubbleSort)).should.equal('function');

  })

  it('should sort array',()=>{
    let arr=[4,2,18,11,1,-1];

    MergeSort(arr).should.eql([-1,1,2,4,11,18]);

  })

})


describe('Merger',()=>{
  it('should define functions correctly',()=>{
    (typeof(Merger)).should.equal('function');

  })

  it('should merge sorted arrays',()=>{
    let left=[-1,14,22,55];
    let right=[3,9,19,20];

    Merger(left,right).should.eql([-1,3,9,14,19,20,22,55]);

  })
})