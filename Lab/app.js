var fs = require('fs');
var http = require('http');
var fileName = "index.html";
var fileName2 = "header.html";
var fileName3 = "footer.html";
var fileName4 = "body.html";

var serv =  http.createServer(function(req,res){
	fs.readFile(fileName2, 'utf8', function(err,data){
		res.writeHead(200,{'Content-Type': 'text-html'});
		res.write(data);
				fs.readFile(fileName3, 'utf8', function(err,data){
					
					res.write(data);
						fs.readFile(fileName4, 'utf8', function(err,data){
							
							res.end(data);
							})})})				
});	

serv.listen(8080);
console.log('Server running on 8080');


	
	
