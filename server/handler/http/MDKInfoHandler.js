module.exports = {
      /**
       * 
       * @param {import('express').Express} server 
       */
      handle: (server, logger) => {
            server.get('/combo/box/api/config/sdk/combo', (request, reply) => {
                  reply.setHeader('Content-Type', 'application/json').send({
                        retcode: 0,
                        message: 'OK',
                        data: {
                              vals: {
                                    email_bind_remind: 'true',       
                                    disable_email_bind_skip: 'false',
                                    email_bind_remind_interval: '7'  
                              }
                        }
                  });
            })
      }
}