const Router = require('koa-router')
const pool = require('../database/index')

const registerRouter = new Router({ prefix: '/register' })
//注册接口
registerRouter.post('/', async (ctx, next) => {
  const { username, password } = ctx.request.body
  //用户名或密码为空，不执行SQL语句
  if (!username || !password) {
    return (ctx.body = {
      code: 201,
      msg: '用户名或密码不能为空',
    })
  }
  //查询数据库中是否存在该用户名
  const sql = 'SELECT * FROM `users` WHERE username=?;'
  const [res] = await pool.execute(sql, [username])
  if (res.length) {
    return (ctx.body = {
      code: 202,
      msg: '用户名已存在',
    })
  }
  //向数据库中添加新的用户数据
  const sql1 = 'INSERT INTO `users` (username,password) VALUES (?,?);'
  // 在 mysql2 库中，pool.execute 方法要求参数以数组形式传入，这与它使用占位符 ? 的方式有关。
  // ? 是位置占位符，数组中的元素会按顺序依次替换 SQL 语句里的占位符
  const res1 = await pool.execute(sql1, [username, password])
  ctx.body = {
    code: 200,
    msg: '注册成功',
  }
})

module.exports = registerRouter
