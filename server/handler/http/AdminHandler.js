const Express = require('express');

module.exports = {
      /**
       * 
       * @param {import('express').Express} server 
       */
      handle: (server, logger) => {
            const mi18n = Express.Router();
            mi18n.get('/m2020030410-version.json', (request, reply) => reply.json({ version: 65 }));
            mi18n.get('/m2020030410-en.json', (request, reply) => {
                  const data = require('../admin-mi18n.json');
                  reply.json(data);
            });

            server.use('/admin/mi18n/plat_oversea/m2020030410', mi18n);
      }
}