// js 两种模块化方案 commonjs  es6 module
// mvc
const Koa = require('koa');
const app = new Koa();
const fs = require('fs');// node 内置的文件模块

// 中间件本质是函数
// const main = ctx => {

//     ctx.response.type = 'html';// 响应头类型
//     // 创建一个读取流 文件流 流向响应体
//     ctx.response.body = fs.createReadStream('./index.html');
 
const main =  ctx => {
  ctx.response.body = 'Hello World';
}
const about =  ctx => {
  ctx.response.type = 'html';// 响应头类型
  ctx.response.body = '<a href="/">Index Page</a>';
}
    
  
// }
// 中间件
//app.use(main); //启用中间件
app.use(route.get('/',main))
app.use(route.get('/about',about))
app.listen(3000);