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
  config.middleware = [
    'time'
  ];
  config.time = {
    prefix: '本次请求耗时:'
  }

  config.view = {
    defaultViewEngine: 'ejs',
    mapping: {
      '.ejs': 'ejs',
    }
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    newsUrl: 'https://news.baidu.com'
  };

  return {
    ...config,
    ...userConfig,
  };
};
