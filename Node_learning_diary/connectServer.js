var connect = require('connect');
var http = require('http');

var app = connect();

function doFirst(request, response, next){
    console.log("Something");
    // if not calling next(); the doSecond function wouldn't run
    // next();
}

function doSecond(request, response, next){
    console.log("else");
    next();
}

app.use(doFirst);
app.use(doSecond);

http.createServer(app).listen(3030);
console.log("Server is running");