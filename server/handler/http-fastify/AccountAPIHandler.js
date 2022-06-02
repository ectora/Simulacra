module.exports = {
      /**
       * @param {import('fastify').FastifyInstance} server
       * @param {import('fastify').FastifyPluginOptions} opts
       * @param {Function} done
       */
      handle: (server, opts, done) => {
            server.all('/account/risky/api/check', (req, reply) => {
                  /**
                   * @type {'DELETE' | 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'OPTIONS'}
                   */
                  // @ts-ignore
                  const METHOD = req.method;
      
                  const methodRet = { "data": null, "message": "invalid request", "retcode": 400 };
      
                  if (METHOD !== 'POST') return reply.header('Content-Type', 'application/json')
                        .send(JSON.stringify(methodRet));
      
                  console.log(request.body);
      
                  const ret = {
                        "retcode": 0,
                        "message": "OK",
                        "data": {
                              "id": "none",
                              "action": "ACTION_NONE",
                              "geetest": null
                        }
                  }
      
                  reply.header('Content-Type', 'application/json');
                  return reply.send(JSON.stringify(ret));
            });
      }
}