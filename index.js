// CRUD with file system
// Make file
// Read file
// Update file
// Rename file
// Delete file

const fs = require('fs');
const path = require('path');
const { memoryUsage } = require('process');
const dirpath = path.join(__dirname, 'crud');
const filepath = `${dirpath}/apple.txt`;

// This is for make file
// fs.writeFileSync(filepath, 'this is a simple file');

// This is for read file
// fs.readFile(filepath,'utf8', (err, item) => {
//     console.log(item);
// })

// This is for update file
// fs.appendFile(filepath, ' and file name is apple.txt', (err) => {
//     if(err) {
//         throw err;
//     }
//     else {
//         console.log('file is updated');
//     }
// });

// This is for Rename file
// fs.rename(filepath, `${dirpath}/fruit.txt`, (err) => {
//     if(!err) console.log('file name is updated');
// })

// This is for delete file  
// fs.unlinkSync(`${dirpath}/fruit.txt`);



// What is Buffer ? 
// Buffer meaning is a temporary memoryUsage. node js need some memory for perform some operation