/* eslint valid-jsdoc: "off" */

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
  config.keys = appInfo.name + '_1740482454573_9389';

  // add your middleware config here
  config.middleware = [];
  // 安全性
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: ['*']

  }

exports.sequelize = {
  dialog: 'mysql',
  host: 'localhost',
  port: '3306',
  username: 'root',
  password: '6912683xiao',
  database: 'zhangdan',
  define: {
    timestamps:false,//自动添加时间戳
    freezeTableName: true,//禁止修改表名
    underscored: true,//禁止驼峰命名
  }

}


  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
