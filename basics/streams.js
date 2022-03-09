const fs  =require('fs');

//read stream 
const readStream = fs.createReadStream('./blogs/blog3.txt' , {encoding : 'utf8'});

//write stream
const writeStream = fs.createWriteStream('./blogs/blog4.txt');

// //.on is event listener , checks every time when we receive a buffer of data.
// readStream.on('data',(chunk) => {
//     console.log("--------------------------New Chunk---------------------------- ");
//     console.log(chunk);
//     writeStream.write('\n-------NEW CHUNK---------\n');
//     writeStream.write(chunk);

// });

//piping
readStream.pipe(writeStream);
