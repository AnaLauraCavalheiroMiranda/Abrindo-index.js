const http = require('http');
const hostname = '127.0.0.1';

const port = 3001;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('deu certo!\n');
});
    server.listen(port, hostname, () => {
        console.log (`Servidor rodando em http://${hostname}:${port}/`);
    });