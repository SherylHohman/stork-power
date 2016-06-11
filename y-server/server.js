// NOT BEING USED CURRENTLY


// http is an add-on to node
// gving it an entry point into..

// server is something that know what to do with "internet stuff"
// like http, protocalls, etc

var express = require('express');
var app = express();

app.use(express.static(__dirname + './../client'));

// app.get('/', function(req, res){
//   console.log('Hello World !');
//   res.send("Hello World");
// });

app.listen(3000, function(){
  console.log('listening on port 3000');
});

module.exports = app;
