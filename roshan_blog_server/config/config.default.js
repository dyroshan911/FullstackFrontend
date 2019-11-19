/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_roshan911';

  // add your middleware config here
  // add your user config here

  config.security = {
    csrf: {
      enable: false, //开始时使用postman 暂时关闭
      ignoreJSON: true
    },
    domainWhiteList: [ 'http://localhost:3000' ],
  }

  const userConfig = {
    // myAppName: 'egg',
    //newsUrl: 'https://news.baidu.com'
    mongoose: {
      client: {
        url: 'mongodb://127.0.0.1/roshan_blog',
        options: {},
      }
    },
    cors: {
      origin: ctx => ctx.get('origin'),
      credentials: true,
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
