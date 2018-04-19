//Good or Bad//

var http = require("http");



//function for the good server//
function theGood(request, response) {
	response.end("You look like you've lost weight.");
	console.log(request);
}

//creating the server//
var server = http.createServer(theGood);
server.listen(7000, function(){
	console.log("listening at http://localhost:7000/")
})

var http = require("http");


//function for the bad server//
function theBad(request, response) {
	response.end("You're a fool, fool!");
	console.log(request);
}

//creating the server//
var serverB = http.createServer(theBad);

serverB.listen(7500, function(){
	console.log("listening at http://localhost:7500/")
})