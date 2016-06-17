var static = require('koa-static');
var koa = require('koa');
var app = koa();

// add middleware
app.use(static(__dirname + './../client'));


module.exports = app;
