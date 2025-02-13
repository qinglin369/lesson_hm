const Koa = require('koa');
const app = new Koa();
// 数组
const handler = async(ctx, next)  => {
  try {
    await next();
  } catch(err) {
    ctx.response.status = err.statusCode || err.status || 500;
    ctx.response.type = 'html';
//     ctx.response.body = {
//       message: err.message
//     }
  }
  ctx.response.body = '<p>Somthing wrong, please contact administrator</p>';
  ctx.app.emit('error', err, ctx);// vue 子向父汇报
}

const main = async (ctx, next) => {
  ctx.throw(500); // 抛出一个错误
  await next();
}

app.on('error', (err) => {
  console.log('logging error', err.message);
  console.log(err);
});

app.use(main);
app.use(handler); // 挂载 有人兜底 错误处理中间件
app.listen(3000);