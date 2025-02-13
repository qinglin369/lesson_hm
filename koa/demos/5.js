const Koa = require('koa');
const app = new Koa();
const fs = require('fs');// node 内置的文件模块
// 使用 fs.promises 访问 promise-based 文件系统
const fsPromise = fs.promises;// fs 异步 promisify

const main = async ctx => {
  ctx.response.type = 'html';
  // 异步读取文件,fs用回调函数解决异步问题
  console.log(fs.readFile('./index.html,', () => {}),fsPromise.readFile('./index.html'))
  ctx.response.body = await fsPromise.readFile('./index.html');

}