export class Iterator{
  constructor(arr) {
    this.data=arr;
    this.step=0;    
  }

  hasNext(){
    return this.data[this.step+1]?true:false;
  }

  next(){
    this.step++;
    return this.data[this.step];
  }

  remove(){
    delete this.data[this.step];
  }  
}


export const subsum=(sum)=>{

}