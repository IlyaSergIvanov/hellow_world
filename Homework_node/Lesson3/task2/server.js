var http = require("http");
var url = require("url");
var transformer = require("./transformer.js");

var server = http.createServer();
server.listen (8080);

server.on("request", function(req, res) {
  res.writeHead(200, {"Content-Type":"text/plain"})

  var functionName = url.parse(req.url).pathname.slice(1);
  console.log(functionName);
  
  var identificator = url.parse(req.url, true).query.name;
  console.log(identificator);


  if (functionName === "camel_to_snake") {
  	res.end(transformer.camel_to_snake(identificator));
  }
    
  if (functionName === "snake_to_camel") {
  	res.end(transformer.snake_to_camel(identificator));
   }
    

});