module.exports = {
      /**
       * 
       * @param {import('express').Express} server 
       */
      handle: (server, logger) => {
            server.all('/account/risky/api/check', (req, reply) => {
                  /**
                   * @type {'DELETE' | 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'OPTIONS'}
                   */
                  // @ts-ignore
                  const METHOD = req.method;
      
                  const methodRet = { "data": null, "message": "invalid request", "retcode": 400 };
      
                  if (METHOD !== 'POST') return reply.setHeader('Content-Type', 'application/json')
                        .send(JSON.stringify(methodRet));
      
                  console.log(req.body);
      
                  const ret = {
                        "retcode": 0,
                        "message": "OK",
                        "data": {
                              "id": "none",
                              "action": "ACTION_NONE",
                              "geetest": null
                        }
                  };
      
                  reply.setHeader('Content-Type', 'application/json');
                  return reply.send(JSON.stringify(ret));
            });

            
      }
}