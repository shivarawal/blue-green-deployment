const http = require('http');
const port = process.env.PORT || 3000;

const requestHandler = (req, res) => {

  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Green Version - v2');
    return;
  }

  if (req.url === '/health' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: 'UP'
    }));
    return;
  }

  if (req.url === '/version' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      version: 'v2-green'
    }));
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
