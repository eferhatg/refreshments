export class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

export default class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {

    var root = this.root;
    var node = new Node(val);

    if (!root) {
      this.root = node;
      return;
    }

    var curr = root;

    while (curr) {
      if (val < curr.data) {
        if (!curr.left) {
          curr.left = node;
          break;
        } else {
          curr = curr.left;
        }
      } else {
        if (!curr.right) {
          curr.right = node;
          break;
        } else {
          curr = curr.right;
        }
      }
    }
  }

  containsRecursive(val, node) {

    if (node.data === val) 
      return true;
    if (val < node.data && node.left) 
      return this.containsRecursive(val, node.left);
    if (val >= node.data && node.right) 
      return this.containsRecursive(val, node.right);
    return false;
  }

  contains(val) {
    var curr = this.root;
    return this.containsRecursive(val, curr);
  }

  // validateRecursive(node,min=null,max=null){   if(min!==null&&node.data<min){
  //   return false;   }   if(max!==null&&node.data>max){     return false;   }
  // if(node.left&&!this.validate(node.left,min,node.data)){     return false;   }
  //   if(node.right&&!this.validate(node.right,node.data,max)){     return false;
  //   }   return true; } validate(){   var curr=this.root;   return
  // this.validate(curr); }

  traverseBF() {
    var curr = this.root;
    var result = [];
    var queue = [curr];

    while (curr = queue.shift()) {
      result.push(curr.data);
      if (curr.left) 
        queue.push(curr.left);
      if (curr.right) 
        queue.push(curr.right);
      }
    return result;
  }

  traverseInOrder() {
    
    var curr = this.root;
    var result = [];
    let traverse = (node) => {
      node.left && traverse(node.left);
      result.push(node.data);
      node.right && traverse(node.right);
    }
    traverse(curr);
    return result;
  }

  traversePreOrder() {
    var curr = this.root;
    var result = [];
    let traverse = (node) => {
      result.push(node.data);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }
    traverse(curr);
    return result;
  }

  traversePostOrder() {
    var curr = this.root;
    var result = [];
    let traverse = (node) => {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      result.push(node.data);
    }
    traverse(curr);
    return result;
  }

  minValue() {
    var curr = this.root;
    while (curr) {
      if (curr.left) 
        curr = curr.left;
      else 
        return curr.data;
      }
    }

  maxValue() {
    var curr = this.root;
    while (curr) {
      if (curr.right) 
        curr = curr.right;
      else 
        return curr.data;
      }
    }

  height() {
    var curr = this.root;
    var maxHeight = 0;
    var traverse = (node, height) => {
      maxHeight = height > maxHeight
        ? height
        : maxHeight;
      if (node.left) 
        traverse(node.left, height + 1);
      if (node.right) 
        traverse(node.right, height + 1);
      }
    traverse(curr, 0)
    return maxHeight;
  }

  countLeaves() {
    var curr = this.root;
    var leaveCount = 0;
    var traverse = (node) => {
      if (!node.left && !node.right) 
        leaveCount++;
      if (node.left) 
        traverse(node.left);
      if (node.right) 
        traverse(node.right);
      }
    traverse(curr);
    return leaveCount;
  }

}