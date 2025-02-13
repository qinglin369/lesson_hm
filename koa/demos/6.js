const path = require('path');//内置模块
const Koa = require('koa');
const app = new Koa();
// 静态服务器
const server = require('koa-static');// 周边生态
// 路径对象
console.log(path.join(__dirname,'static'));
const main = server(path.join(__dirname,'static'));
app.use(main)
app.listen(3000);
