var fs = require('fs');
var { nanoid } = require("nanoid/non-secure");
var size=10; //Default file size in Mb

var writeFile = fs.openSync('in.txt', 'w'); //Open file to write

if(process.argv[2]) size=process.argv[2] //Get argument if exist

let limit = 64 * 1024 * size; //Set limit for output file

console.log('Generating a test file with size:',size+'Mb')

for(let i=0; i<limit; i++) {
  fs.writeSync(writeFile, nanoid(15) + '\n', null, 'utf8'); //Generate and write string to the file
}

console.log('Test file is generated!');

fs.closeSync(writeFile); //Close file 
