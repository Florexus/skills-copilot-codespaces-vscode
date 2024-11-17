//create web server
var http = require('http');
var fs = require('fs');

//create server
var server = http.createServer(function(req, res) {
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/html'});
  var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  myReadStream.pipe(res);
});

//listen to port 3000
server.listen(3000, function() {
  console.log('Server is listening on port 3000');
});