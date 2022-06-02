module.exports = {
      /**
       * @param {import('fastify').FastifyInstance} server
       * @param {import('fastify').FastifyPluginOptions} opts
       * @param {Function} done
       */
      handle: (server, opts, done) => {
            server.get('/common/hk4e_global/announcement/api/getAnnContent', (request, reply) => {
                  delete require.cache[require.resolve('../announcements.json')];
                  const Announcements = require('../announcements.json');

                  /**
                   * @type {{
                   *    game: 'hk4e',
                   *    game_biz: 'hk4e_global',
                   *    lang: 'en',
                   *    bundle_id: 'hk4e_global',
                   *    platform: 'pc',
                   *    region: 'os_dev',
                   *    t: '1650263655',
                   *    level: '60',
                   *    channel_id: '1'
                   * }}
                   */
                  // @ts-ignore
                  const query = request.query;
                  const errorRet = { "data": null, "message": "提交参数有误", "retcode": -1003 };
                  
                  if (!query.game || !query.game_biz || !query.lang || !query.bundle_id ||
                        !query.platform || !query.bundle_id || !query.platform || !query.region ||
                        !query.t || !query.level || !query.channel_id) {
                        opts.logger.error(`[FAIL] Required query credentials weren't complete.`);
                        return reply
                              .header('Content-Type', 'application/json')
                              .send(JSON.stringify(errorRet));
                  }

                  const ret = {
                        "retcode": 0,
                        "message": "OK",
                        "data": {
                              "list": Announcements.data.list,              
                              "total": Announcements.data.list.length,
                              "pic_list": [],
                              "pic_total": 0
                        }
                  };

                  reply.header('Content-Type', 'application/json');
                  reply.send(ret);
            });
      }
}