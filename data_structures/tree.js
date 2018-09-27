export class Node {
  constructor(data){
    this.data=data;
    this.children=[];
  }

  add(data){
    this.children.push(new Node(data));
    return this;
  }

  remove(data){
    var dataIx=-1;
    for(let i=0;i<this.children.length;i++){
      if(this.children[i].data===data){
        dataIx=i;
      }
    }
    if(dataIx!==-1){
      this.children.splice(dataIx,1);
    }
    
  }

}

export class Tree {
  constructor(){
    this.root=null;
  }

  traverseBF(fn){
    if(!this.root) return null;
    var arr=[this.root];
    while(arr.length){
        const node= arr.shift();
        fn(node);
        arr.push(...node.children);
    }
  }

  traverseDF(fn){
    if(!this.root) return null;
    var arr=[this.root];
    while(arr.length){
        const node= arr.pop();
      
        arr.push(...node.children);
        fn(node);
    }
  }
  
  levelWidth(){
    var levelWidth=[0];
    var arr=[this.root,'s'];
    while(arr.length>1){
      var node=arr.shift();
      if(node==='s'){
        levelWidth.push(0);      
        arr.push('s');
      }else{
        arr.push(...node.children);
        levelWidth[levelWidth.length-1]++;
      }
    

    }
    return levelWidth;
  }


}