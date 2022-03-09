const fs =require('fs');
//fs = file system



// //reading files
// fs.readFile('./blogs/blog1.txt', (err,data) => {
// if(err) {
//     console.log(err);
// }
// console.log(data); //receives a buufer of data that is received when we read this file.
// console.log(data.toString());
// });

// console.log('last line');
// // when the function is read , js compiler does not wait for it to be finiseed before going forward with remaining code.


//write files
// fs.writeFile(file path , string to write , callback function)
// it will replace whatever is written
// fs.writeFile('./blogs/blog1.txt' , 'Boisss!!!' , () => {
// console.log('file was written');
// });

// // if we run this on a file that does not exist it will create that file.
// fs.writeFile('./blogs/blog2.txt' , 'Learning Node.js!!!' , () => {
//     console.log('file was written');
//     });


//directories
//synchronus method
// if (!fs.existsSync('./assets')) {
// //asynchronus method
// fs.mkdir('./assets' , (err) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log('folder created');
// });
// }
// else  {
//     fs.rmdir('./assets' , (err) => {
//     if(err) {
//     console.log(err);
//             }
//     console.log('folder deleted');
//     })
// }


// deleting files
if (fs.existsSync('./blogs/deleteme.txt')) {
    fs.unlink('./blogs/deleteme.txt', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('file deleted');
    });
}

//Streams and buffers

