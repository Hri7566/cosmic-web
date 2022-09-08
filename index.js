const http = require('http');
const https = require('https');
const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT | 3000;
const TLS = process.env.TLS == 'true';

const app = express();
app.use(express.static(path.resolve(__dirname, 'public')));

let server;

if (!TLS) {
    server = http.createServer(app);
} else {
    let key;
    let cert;

    server = https.createServer({
        key, cert
    }, app);
}

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Listening on port ${PORT}`);
});
