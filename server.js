const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);

server.get('/', (req, res) => {
    res.send('<h3>node-db3-project</h3>');
});

module.exports = server;