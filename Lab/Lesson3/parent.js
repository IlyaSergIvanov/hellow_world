
var http = require('http');
var cp = require("child_process");

var child = cp.fork(__dirname + '/door.js');

child.on('message', function (data) {
  console.log(data);
  child.kill();
});