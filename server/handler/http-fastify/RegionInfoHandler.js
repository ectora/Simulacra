const fs = require('fs');
const path = require('path');
const protobuf = require("protobufjs");

module.exports = {
      /**
       * @param {import('fastify').FastifyInstance} server
       * @param {import('fastify').FastifyPluginOptions} opts
       * @param {Function} done
       */
      handle: (server, opts, done) => {
            server.get('/query_cur_region', async (request, reply) => {
                  opts.logger.debug('[HTTP] REQ URL: ' + request.url);

                  const RegionPath = path.resolve(__dirname, '..', 'regionProto.txt');
                  const RegionProto = fs.readFileSync(RegionPath, { encoding: 'utf-8' });

                  const root = await protobuf.load("server/proto/QueryCurrRegionHttpRsp.proto");
                  const testMessage = root.lookup("QueryCurrRegionHttpRsp");
                  // @ts-ignore
                  const message = testMessage.decode(Buffer.from(RegionProto, 'base64'));
                  message["retcode"] = 6;
                  message["msg"] = "Server is currently down for temporary fixes, the estimated time is currently unknown.";
                  message["regionInfo"].gateserverIp = "127.0.0.1";
                  message["regionInfo"].gateserverPort = 22102;
                  // @ts-ignore
                  const encoded = testMessage.encode(message).finish();
                  // console.log(message);

                  reply.header('Content-Type', 'text/html')
                        .send(Buffer.from(encoded).toString('base64'));
            });

            server.get('/query_region_list', async (request, reply) => {
                  opts.logger.debug('[HTTP] REQ URL: ' + request.url);
                  
                  const RegionPath = path.resolve(__dirname, '..', 'regionListProto.txt');
                  const RegionProto = fs.readFileSync(RegionPath, { encoding: 'utf-8' });

                  const root = await protobuf.load("server/proto/QueryRegionListHttpRsp.proto");
                  const testMessage = root.lookup("QueryRegionListHttpRsp");
                  const message = testMessage.decode(Buffer.from(RegionProto, 'base64'));

                  message["regionList"] = [
                        {
                              name: "os_dev",
                              title: "<color=#425af5>Simulacra</color>PS",
                              type: "DEV_PUBLIC",
                              dispatchUrl: "http://127.0.0.1:810/query_cur_region"
                        },
                        {
                              name: "os_dev_qa",
                              title: "<color=#425af5>Simulacra</color>PS_test",
                              type: "DEV_PUBLIC",
                              dispatchUrl: "http://127.0.0.1:810/query_cur_region"
                        }
                  ];

                  // @ts-ignore
                  const encoded = testMessage.encode(message).finish();
                  // console.log(message);

                  reply.header('Content-Type', 'text/html')
                        .send(Buffer.from(encoded).toString('base64'));
            });
      }
}