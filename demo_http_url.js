var http = require('http');
var url = require('url');



http.createServer(function (req, res) {

  var q = url.parse(req.url, true);


  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url + '<br/>');
  console.log(req.headers.host)
  res.write(req.headers.host);
  res.end();
}).listen(8080);