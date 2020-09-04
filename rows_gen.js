var fs = require('fs');
var { nanoid } = require("nanoid");
var writeFile = fs.openSync('in.txt', 'w');
var size=10;

if(process.argv[2]) size=process.argv[2]

let limit = 64 * 1024 * size;

console.log('Generating a test file with size:',size+'Mb')
for(let i=0; i<limit; i++) {
  fs.writeSync(writeFile, nanoid(15) + '\n', null, 'utf8');
}
console.log('Test file is generated!');
fs.closeSync(writeFile);