const Koa = require('koa');
const app = new Koa();
const fs = require('fs');// node 内置的文件模块

// 中间件本质是函数
const main = ctx => {
  if ( ctx.request.path !== '/' ) { // 不是首页
    ctx.response.type = 'html';// 响应头类型
    ctx.response.body = '<a href="/">IndexPage</a>';
  } else {
    ctx.response.type = 'text';
    ctx.response.body = '<h1>Hello World</h1>';
  }
}
// 中间件
app.use(main); //启用中间件
app.listen(3000);