//a
/*var http = require('http');
var fs = require('fs');
let langChoice = process.argv[2];
let page;
var server = http.createServer(function (req,res){
	if (langChoice == 'ru'){
		page = 'ru.html';
	}else if (langChoice == 'en'){
		page = 'en.html';
	}else console.log("Wrong language!");
	fs.readFile (page,'utf8',function(err,data){
		if (err){
			console.log('Error!');
		}else {
			res.writeHead(200, {'Content-Type':'text/html'});
			res.end(data);
		}
	});	
});
server.listen(8080);
console.log('ОК');*/
//b
var http = require ('http');
var fs = require ('fs');
let langChoice = process.env.LANG;
let page;
var server = http.createServer (function (req, res) {
	if (langChoice.substr(0, 2) == 'ru') {
		page = 'ru.html';
	} else if (langChoice.substr(0, 2) == 'en') {
		page = 'en.html';
	}	
	fs.readFile (page, 'utf8', function (err, data) {
		if (err) {
			console.error ('Error!');
		} else {
			res.writeHead(200, {'Content-Type':'text/html'});
			res.end(data);
		}
	});
});
server.listen(8080);
console.log ('OK');
console.log ('Язык страницы: '+ langChoice);

 
