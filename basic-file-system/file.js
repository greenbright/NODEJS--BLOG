//file system module
//1 Read a file

const fs = require('fs');

/*fs.readFile('./doc/hello.txt', (err, data)=> {
    if(err){
        console.log('there was an error reading this file')
    }
    console.log(data.toString())

})
// Write file
fs.writeFile('./doc/hello.txt', 'i just replaced you',()=>{
    console.log('file was written')
})

fs.writeFile('./doc/node.txt', 'A new file was created',()=>{
    console.log('file was written')
})
*/
// Directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }
       console.log('folder created')
    })
}else{
    fs.rmdir('./assets',(err)=>{
    if(err){
        console.log(err);
    } 
    console.log('folder deleted')
    })
}
// Deleting file
if(fs.existsSync('./doc/deleteme.txt')){
    fs.unlink('./doc/deleteme.txt', (err)=>{
        if(err){
            console.log(err)
        }
        console.log('file deleted')
    })
}
