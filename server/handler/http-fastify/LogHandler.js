module.exports = {
      /**
       * @param {import('fastify').FastifyInstance} server
       * @param {import('fastify').FastifyPluginOptions} opts
       * @param {Function} done
       */
      handle: (server, opts, done) => {
            server.all('/perf/config/verify', (req, reply) => {
                  reply.header('Content-Type', 'application/json');
                  reply.send(`{"code": 0}`);
            });

            server.all('/log', (req, reply) => {
                  // console.log(request.body);
                  if (req.body) {
                        opts.logger.error(`[HTTP] SpiderLog | ${req.body.logStr}`);
                        console.error(`${req.body.stackTrace}`);
            
                        reply.header('Content-Type', 'application/json');
                        reply.status(404).send("{\"code\":0}");
                  } else {
                        reply.header('Content-Type', 'application/json');
                        reply.status(404).send("{\"code\":0}");
                  }
            });

            server.all('/sdk/dataUpload', (request, reply) => {
                  // console.log(request.body);

                  if (!request.body) {
                        reply.header('Content-Type', 'application/json');
                        reply.status(404).send("{\"code\":0}");
                  }

                  const ret = { "code": 0 };

                  /**
                   * @type {[{
                   *    applicationId: 900001,
                   *    applicationName: 'mihoyosdk',
                   *    msgId: 'ac59f3384f3bed0f947ddc8e97b924c1ccd7dab01653134292762',
                   *    eventName: 'UserBehavior'
                   *    uploadContent: {
                   *          deviceInfo: {},
                   *          userInfo: {},
                   *          versionInfo: {},
                   *          logInfo: {
                   *                logTime: '1653134937', actionId: 100,
                   *                actionName: 'main', cBody: ''
                   *          }
                   *    }
                   * }]}
                   */
                  const data = request.body;
                  console.log(data[0].uploadContent.versionInfo);
                  console.log(data[0].uploadContent.deviceInfo);
                  console.log(data[0].uploadContent.userInfo);
                  logger.info(`[HTTP] SDKLogEvent: ${data[0].eventName}`);

                  reply.header('Content-Type', 'application/json');
                  reply.send(JSON.stringify(ret));
            });
      }
}