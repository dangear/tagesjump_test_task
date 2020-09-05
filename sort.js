var fs = require('fs'),
  spawn = require('child_process').spawn,
  sort = spawn('sort', ['in.txt']);

var start = Date.now();

var writer = fs.createWriteStream('out.txt');

console.log('Let\'s try to sort!');

sort.stdout.on('data', function (data) {
  writer.write(data);
});

sort.on('exit', function () {
  writer.end();
  var closetime = Date.now();
  console.log('Job done with time:', (closetime - start) / 1000, ' secs');
});

sort.stderr.on('data', function (data) {
  if(data) console.log('Err: ' + data);
});
