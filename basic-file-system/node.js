// BUILDING A SERVER IN NODE.JS

const http = require('http');
const server = http.createServer((request,response)=>{
  //console.log('i hear,thanks for request');

  console.log('method',request.method());
  console.log('method',request.url());
  const user ={
      name: 'bobby',
      movie : ' plans'
  }

  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(user))
});

server.listen(3000);

// BUILDING A SERVER WITH EXPRESS.JS
//1. Installing npm .. npm install express

const express = require('express');
const app = express();
app.get('/',(req, res)=>{
    
    res.send('Hello, getting a root');
})


app.listen(3000);

// NODE SYSTEM MODULE FOR FILES
const fs = require('fs');
fs.readFile('./hello.tx', (err, data)=>{
  if(err){
      console.log( 'error');
  }else{
      console.log(data.toString('utf8'))
  }
})

// 1
const file = fs.readFileSync('./hello.txt');
console.log('syn',file.toString());

/* APPEND ELEMENT
fs.appendFile('./hello.txt', 'This is so cool', err =>{
    if(err){
        console.log(err);
    }

})*/

// WRITE 
fs.writeFile('buy.txt','i am buying', err=>{
   if(err){
       console.log(err)
   }

   // DELETE
   fs.unlink('./buy.txt', err =>{
       if(err){
           console.log(err);
       }
   })

   
})
