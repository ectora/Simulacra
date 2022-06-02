module.exports = {
      /**
       * 
       * @param {import('express').Express} server 
       */
      handle: (server, logger) => {
            server.all('/combo/box/api/config/sdk/combo', (request, reply) => {
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
            });

            server.all('/hk4e_global/mdk/shield/api/loadConfig', (request, reply) => {
                  reply.setHeader('Content-Type', 'application/json').send({
                        retcode: 0,
                        message: 'OK',
                        data: {
                              id: 6,
                              game_key: 'hk4e_global',
                              client: 'PC',
                              identity: 'I_IDENTITY', 
                              guest: false,
                              ignore_versions: '',
                              scene: 'S_NORMAL',
                              name: '原神海外',
                              disable_regist: false,
                              enable_email_captcha: false,
                              thirdparty: ['fb', 'tw'],
                              disable_mmt: false,
                              server_guest: false,
                              thirdparty_ignore: { fb: '', tw: '' },
                              enable_ps_bind_account: false,
                              thirdparty_login_configs: {
                                    tw: { token_type: 'TK_GAME_TOKEN', game_token_expires_in: 2592000 },
                                    fb: { token_type: 'TK_GAME_TOKEN', game_token_expires_in: 2592000 } 
                              }
                        }
                  });
            });

            server.all('/hk4e_global/combo/granter/api/getConfig', (request, reply) => {
                  reply.setHeader('Content-Type', 'application/json').send({
                        retcode: 0,
                        message: 'OK',
                        data: {
                              protocol: true,
                              qr_enabled: false,
                              log_level: 'INFO',
                              announce_url: 'https://webstatic-sea.hoyoverse.com/hk4e/announcement/index.html?sdk_presentation_style=fullscreen&sdk_screen_transparent=true&game_biz=hk4e_global&auth_appid=announcement&game=hk4e#/',
                              push_alias_type: 2,
                              disable_ysdk_guard: false,
                              enable_announce_pic_popup: true
                        }
                  });
            });

            server.all('/hk4e_global/combo/granter/api/compareProtocolVersion', (request, reply) => {
                  reply.setHeader('Content-Type', 'application/json').send({
                        retcode: 0,      
                        message: 'OK',   
                        data: {
                              modified: true,
                              protocol: {    
                                    id: 0,
                                    app_id: 4,
                                    language: 'en',
                                    user_proto: '',
                                    priv_proto: '',
                                    major: 7,
                                    minimum: 0,
                                    create_time: '0',
                                    teenager_proto: '',
                                    third_proto: ''
                              }
                        }
                  });
            });

            server.all('/hk4e_global/mdk/agreement/api/getAgreementInfos', (request, reply) => {
                  reply.setHeader('Content-Type', 'application/json').send({
                        retcode: 0,
                        message: "OK",
                        data: {
                              marketing_agreements: []
                        }
                  });
            });
      }
}