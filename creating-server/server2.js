// IN NODE WILL MANUALLY CREATE A SERVER THAT LIVE IN THE BACKEND OF THE APP
const http = require('http');


const server = http.createServer((req,res)=>{
    //console.log('request made')
    console.log(req.url,req.method)
    // set header, content-type cookies
    res.setHeader('Content-Type', 'text/html');
    res.write('<p>This is the header </p>');
    res.write('<p>The subheader </p>');
    res.end();
});
server.listen(3000, 'localhost',()=>{
    console.log('listening to request on port 3000')
})