const Logger = require('../constants/Logger.js');
// const Fastify = require('fastify');
const Express = require('express');
const path = require('path');
const express = Express();

const logger = new Logger(path.resolve(process.cwd() + '/logs/'));

express.get('/', (request, response) => response.send('Welcome to Simulacra.'));
express.post('/', (request, response) => response.json({ code: 0 }));
express.get('/favicon.ico', (request, response) => {
      response.setHeader('Content-Type', 'image/x-icon').send('')
});

// HTTP stuff handler
require('./handler/http/AccountAPIHandler').handle(express, logger);
require('./handler/http/RegionInfoHandler').handle(express, logger);
require('./handler/http/MDKInfoHandler').handle(express, logger);

// Logger and utilities
require('./handler/http/CommonHandler').handle(express, logger);
require('./handler/http/AdminHandler').handle(express, logger);

module.exports = {
      execute: (port) => {
            // Run the server!
            express.all('*', (request, response) => response.status(404).send('{"code":0}'));
            express.listen(port, () => {
                  logger.log(`HTTP Server | Listening on http://127.0.0.1:${port}`);
            });
      }
}