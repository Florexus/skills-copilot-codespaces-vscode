// Create web server
// Create a web server that listens to the port 3000 and serves the comments.html file
var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  fs.readFile('comments.html', function(err, contents) {
    response.write(contents);
    response.end();
  });
}).listen(3000, function() {
  console.log('Server is listening on port 3000');
});