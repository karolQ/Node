// create a basic server
var http = require('http');
var fs = require('fs');

// adding 404 response for unknow responses
function send404Response(response){
    response.writeHead(404,{"Context-Type": "text/plain"});
    response.write("Error 404: Page not found!");
    response.end();
}

// Handle a user's request
function onRequest(request, response){
    if(request.method == 'GET' && request.url == '/'){
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./index.html").pipe(response);
    }
    else{
        send404Response(response);
    }
    // response.end();
}

http.createServer(onRequest).listen(3030);
console.log("Server is now running");