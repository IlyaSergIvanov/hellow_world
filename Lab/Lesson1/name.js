var http = require('http');

var serv = http.createServer(function(request,response){
	console.log("HTTP works!");
	response.writeHead(404,{'Content-Type': 'text/html'});
	response.write('<h1>Hello!</h1>');
	response.end();

});

serv.listen(8080);