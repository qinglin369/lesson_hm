'use strict';// 严格模式

// 引入基类
const Controller = require('egg').Controller;
// 继承 基类
class PostController extends Controller {
  async index() {
    // this 指向ctx 上下文 ctx = request + response
      const { ctx } = this;
      ctx.body = '文章列表';
  }
}
// 导出
module.exports = PostController;