// var app = require('./server/server');

var express = require('express');
var app = express();

var port = 8080;
app.use(express.static(__dirname + '/client'));

app.listen(port, function(){
  console.log('express server listening on http://localhost:' + port);
});
