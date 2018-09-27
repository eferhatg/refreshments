export class Event{
  constructor(){
    this.events={};
  }

  on(eventname,callback){
    if(this.events[eventname]){
      this.events[eventname].push(callback);
    }else{
      this.events[eventname]=[callback];
    }
  }

  trigger(eventname){
    if(this.events[eventname]){
      for(let cb of this.events[eventname]){
        cb();
      }
    }
  }

  off(eventname){
    delete this.events[eventname];
  }
}