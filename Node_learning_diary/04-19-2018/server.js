var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');

// MIME types
var mimeTypes ={
    "html" : "text/html",
    "jpeg" : "image/jpeg",
    "jpg" : "image/jpeg",
    "png" : "image/pgn",
    "javascript" : "text/javascript",
    "css" : "text/css"
};

// create server
http.createServer(function(req, res){
    var uri = url.parse(req.url).pathname;
    var fileName = path.join(process.cwd(), unescape(uri));
    console.log("Loading " +  uri);
    var stats;
    try{
        stats = fs.lstatSync(fileName);
    } catch(e){
        res.writeHead(404, {"Content-Type" : "test/plain"});
        res.write("404, Page not found.");
        res.end();
        return;
    }
    // checking if file/Directory
    if(stats.isFile()){
        var contentType = mimeTypes[path.extname(fileName).split(".").reverse()[0]];
        res.writeHead(200, {"Content-Type" : contentType});

        var fileStream = fs.createReadStream(fileName);
        fileStream.pipe(res);
    }
    else if(stats.isDirectory()){
        res.writeHead(302, {
            "Location" : "index.html"
        });
        res.end();
    }
    else{
        res.writeHead(500, {"Content-Type" : "text/plain"});
        res.write("500, Internal Error");
        res.end();
    }
}).listen(3000);