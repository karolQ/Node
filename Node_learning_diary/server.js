// create a basic server
var http = require('http');
var fs = require("fs");


function onRequest(request, response){
    consol.log("A user made a request" + request.url);
    response.writeHead(200, {"Context-Type": "text/plain"});
    resposne.write("Here is some data.");
    response.end();
}

http.createServer(onRequest).listen(3030);
console.log("Server is now running");