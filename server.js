var express = require('express');
var fs = require('fs');
var port = process.env.PORT || 5000;
var app = express.createServer(express.logger());

app.get('/', function (request, response) {
  fs.readFile('index.html', function(error, content) {
    if (error) {
      response.writeHead(500);
      response.end();
  	  console.error(error);
    }
    else {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(content, 'utf-8');
    }
  });
});
// app.use(Express.static(__dirname + '/public'))
app.listen(port, function() {
  console.log('Listening on ' + port);
});