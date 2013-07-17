!/usr/bin/env node
var fs      = require('fs');
var express = require('express');

var app = express.createServer(express.logger());
var filename = "index.html";
var mybuffer = new Buffer();
var msgstr;

mybuffer = new Buffer(fs.readFileSync(filename));
mystring = mybuffer.toString();

app.get('/', function(request, response) {
  response.send(msgstr);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
