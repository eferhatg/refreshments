const https=require('https');

var start=Date.now();

const doRequest=()=>{
  https.request('https://www.google.com',res=>{
    res.on('data',()=>{})
    res.on('end',()=>{
      console.log(Date.now()-start);
    })
  }).end();
}

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();