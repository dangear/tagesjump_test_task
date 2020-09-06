var fs = require("fs");
var spawn = require("child_process").spawn;
var sort = spawn("sort", ["in.txt"]);  //use system sort util

var startTimer = Date.now(); //Start timer for monit if need it

var writer = fs.createWriteStream("out.txt"); //create output file

console.log("Let's try to sort!");

sort.stdout.on("data", function (sortedData) { //when get data from sort util
  writer.write(sortedData); //write data to output file
});

sort.on("exit", function () { //when sort util job is done
  writer.end(); //close output file
  var stopTimer = (Date.now() - startTimer) / 1000; //Stop timer for monit if need it
  console.log(`Job done with time: ${stopTimer} secs`); //Show job time
});

sort.stderr.on("data", function (err) { //if sort util return error
  if(err) console.log("Err: " + err); //console it
});
