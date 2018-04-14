var connect = require('connect');
var http = require('http');

var app = connect();
/* connect demo1
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
*/

// connect demo2
function profile(request, response){
    console.log("User requested profile");

}

function forum(request, response){
    console.log("User requested forum");

}

app.use('/profile', profile);
app.use('/forum', forum);

http.createServer(app).listen(3030);
console.log("Server is running");