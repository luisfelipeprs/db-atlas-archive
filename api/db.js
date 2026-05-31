const fs = require('fs');
const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const file = path.join(__dirname, '..', 'db.json');
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const router = jsonServer.router(data);

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);

module.exports = server;
