// READING DATA AND WRITE DATA
const fs = require('fs');

// utf8 is same as writing toString() to convert the buffer
const readStream = fs.createReadStream('./doc/blog.txt',{encoding: 'utf8'});
const writeStream =  fs.createWriteStream('./doc/blog4.txt')
readStream.on('data', (chuck)=>{
  console.log('--------- NEW CHUNCKS');
  console.log(chuck);
  writeStream.write('\n NEW CHUCK\n');
  writeStream.write(chuck)
});