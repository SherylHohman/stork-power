var app = require('./src/server/server');
var port = 8080;

app.listen(port, function(){
  console.log('express server is listening on http://localhost:' + port);
});
