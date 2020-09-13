var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('It works !');
	res.end();
}).listen(8081);
console.log('Hello world');
console.log('Server at 192.168.77.77:8081')
