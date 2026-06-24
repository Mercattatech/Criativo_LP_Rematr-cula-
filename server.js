const http = require('http');
const fs = require('fs');
const path = require('path');
const root = 'c:/Users/Luiz Culiche/Desktop/Repositorios/Criativo_LP_Rematr-cula-';
const mime = { html:'text/html', css:'text/css', js:'text/javascript', png:'image/png', jpg:'image/jpeg', jpeg:'image/jpeg', svg:'image/svg+xml', ico:'image/x-icon' };

http.createServer((req, res) => {
  const filePath = path.join(root, decodeURIComponent(req.url === '/' ? '/index.html' : req.url));
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    const ext = path.extname(filePath).slice(1);
    res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(9000, () => console.log('Servidor rodando em http://localhost:9000'));
