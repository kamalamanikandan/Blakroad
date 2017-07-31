/* var connect = require('connect');
var port = 3000;
connect.createServer(
   connect.static(_dirname)
).listen(port);
console.log('connected via port'); */
//------------Server-------------

var fs = require("fs");
var config = JSON.parse(fs.readFileSync("./config.json"));

 console.log("Server UP and running.."); 

 var host = config.host;
 var port = config.port;
 var express = require("express");

 var app = express.createServer();



 //---------Application----------------

app.use(app.router);
 app.use(express.static(_dirname + "/staticFiles"));

app.get("/", function(request,response){

response.send("<h1>"/" of TrimServer</h1>");

 });

app.listen(port,host); 
console.log("Listening on Port -->",port);


 //--------------End-------------------
