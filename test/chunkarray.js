import chai from 'chai';
import {chunkarray} from '../common_problems/chunkarray'
chai.should();


describe('ChunkArray',()=>{
  it('should define function correctly',()=>{
    (typeof(chunkarray)).should.equal('function')

  })
  it('should chunk an array according to size',()=>{
    var arr=[2,4,6,7,8,9,0,2,1,4,5,4,2,4];
    var size=4;

    var chunkedArray=chunkarray(arr,size)
    
    chunkedArray[0][2].should.equal(6);
    chunkedArray[2][1].should.equal(4);
    chunkedArray[3].length.should.equal(2);
  })

  it('should return zero length chunk if arr has no element',()=>{
    var arr=[];
    var size=4;

    var chunkedArray=chunkarray(arr,size)
    chunkedArray.length.should.equal(0);
  })

  it('should return zero length chunk if size is zero',()=>{
    var arr=[2,3];
    var size=0;

    var chunkedArray=chunkarray(arr,size);

    chunkedArray.length.should.equal(0);
  })
})