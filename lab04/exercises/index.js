const http = require('http');
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end('<h1>Hello World</h1>');
});

server.listen(3000, () => {
  console.log('Server is listening en http://localhost:3000');
});