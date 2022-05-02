// IN NODE WILL MANUALLY CREATE A SERVER THAT LIVE IN THE BACKEND OF THE APP
// 1 creating server 2 routing 3 statuscode 4 redirect
const http = require('http');
const fs = require('fs');
const _ = require('lodash');


const server = http.createServer((req,res) => {
    // Lodash
    const num =_.random(0,20);
    console.log(num);
    // this will run onces because of lodash
    const greet = _.once(()=>{
        console.log('hi how are you');
    });
    greet();
    greet();
    //console.log('request made')
    //console.log(req.url,req.method);
    // set header, content-type cookies
    res.setHeader('Content-Type', 'text/html');
    let path = './views/';
     switch(req.url){
         case '/':
             path += 'index.html';
             res.statusCode = 200;
             break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
            case '/about-me':
             res.statusCode = 301;
             res.setHeader('Location', '/about');
             res.end();
            break;
        default:
             path += '404.html';
             res.statusCode = 404;
             break
     }
    fs.readFile(path ,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.write(data);
            res.end();
            //or res.end(data)
        }
    })
    /*res.write('<p>This is the header </p>');
    res.write('<p>The subheader </p>');
    res.end();*/
});
server.listen(3000, 'localhost', ()=>{
    console.log('listening to request on port 3000')
});