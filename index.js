const http = require('http');
const hostname = '127.0.0.1';

const port = 3001;
const server = http.createServer((req, res) => {
    res.setHeader('Acess-Contro-Allow-Origin', '*');
    
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.statusCode = 200;
    res.end(JSON.stringify({mensagem: 'essa é uma mensagem'}));
});
    server.listen(port, hostname, () => {
        console.log (`Servidor rodando em http://${hostname}:${port}/`);
    });