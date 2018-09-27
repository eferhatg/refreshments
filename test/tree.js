import chai from 'chai';
import {Tree,Node} from '../data_structures/tree';

chai.should();

describe('Node',()=>{
  it('should define function correctly',()=>{
      (typeof(Node)).should.equal('function');
  });

  it('should add node to its children',()=>{
    var root=new Node(2);
    root.add(3);

    root.children.length.should.equal(1);
    root.children[0].data.should.equal(3);
    
  });

  it('should remove node from its children',()=>{
    var root=new Node(2);
    root.add(3);
    root.add(4);

    root.remove(3);
    root.children.length.should.equal(1);
    root.children[0].data.should.equal(4);
    
  });




});
describe('Tree',()=>{
  it('should define function correctly',()=>{
      (typeof(Tree)).should.equal('function');
  });


  it('should traverseBF',()=>{
    var root=new Node(2);
    var sub1Root=root.add(3);
    var sub2Root=root.add(4);
    sub1Root.add(5);
    sub2Root.add(6);

    var tree= new Tree();
    tree.root=root;
    let traversedArr=[];
    tree.traverseBF((node)=>{
      traversedArr.push(node.data);
    });
   traversedArr.should.eql([2,3,4,5,6]);
    
  });

  it('should traverseDF',()=>{
    var tree= new Tree();
    tree.root=new Node(2);
    tree.root.add(3);
    tree.root.add(4);
    tree.root.children[0].add(5);
    tree.root.children[1].add(6);

  


   
    let traversedArr=[];
    tree.traverseDF((node)=>{
      traversedArr.push(node.data);
    });
   traversedArr.should.eql([2,4,6,3,5]);
    
  });


  it('should determine level width',()=>{
    var tree= new Tree();
    tree.root=new Node(2);
    tree.root.add(3);
    tree.root.add(4);
    tree.root.children[0].add(5);
    tree.root.children[1].add(6);
    tree.root.children[1].add(7);
    tree.root.children[1].add(8);
    tree.root.children[1].children[0].add(9);
  


   

    let levelWidths = tree.levelWidth();
    levelWidths.should.eql([1,2,4,1]);
    
  });



  
  

})