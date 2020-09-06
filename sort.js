var fs = require('fs'),
  spawn = require('child_process').spawn,
  sort = spawn('sort', ['in.txt']);  //use system sort util

var start = Date.now(); //Start timer for monit if need it

var writer = fs.createWriteStream('out.txt'); //create output file

console.log('Let\'s try to sort!');

sort.stdout.on('data', function (data) { //when get data from sort util
  writer.write(data); //write data to output file
});

sort.on('exit', function () { //when sort util job is done
  writer.end(); //close output file
  var closetime = Date.now(); //Stop timer for monit if need it
  console.log('Job done with time:', (closetime - start) / 1000, ' secs'); //Show job time
});

sort.stderr.on('data', function (data) { //if sort util return error
  if(data) console.log('Err: ' + data); //console it
});
