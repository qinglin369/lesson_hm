const Koa = require('koa');
const app = new Koa();
// 计数器 cookie
// jwt token
// cookie 早期用于用户登录 
const main = function (ctx) {
    const n = Number(ctx.cookies.get('view') || 0) + 1;
    ctx.cookies.set('view', n);
    ctx.response.body = n + ' views';

}

app.use(main);
app.listen(3000);