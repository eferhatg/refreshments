process.env.UV_THREADPOOL_SIZE=1;
const crypto= require('crypto');
const cluster =require('cluster');

console.log(cluster.isMaster);

// Is the index.js executed in master mode?
if(cluster.isMaster){
  // Index.js to be executed again but like child.
  cluster.fork();
}else{
// I'm child, going to act like server.
const express =require('express');
const app=express()

function doWork(duration){

let start=Date.now();
  while(Date.now()-start<duration){}
}

app.get('/',(req,res)=>{
  crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
    res.send('Hi There');
  })
  
})

app.get('/fast',(req,res)=>{

  res.send('This is fast');
})

app.listen(3333);
}



///ab -c 50 -n 500 localhost:3333/fast