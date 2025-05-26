//连接数据库
const mysql = require('mysql2')
const pool = mysql.createPool({
  host: 'localhost',
  database: 'book_db',
  user: 'root',
  password: '6912683xiao',
  connectionLimit: 10,
})
//连接是否成功
pool.getConnection((err, connection) => {
  if (err) {
    console.log('数据库连接失败', err);
    return;
  }
  // 成功获取连接即表示连接可用
  console.log('数据库连接成功');
  // 释放连接回连接池
  connection.release();
});

module.exports = pool.promise();


// execute 方法是 mysql2 连接池提供的强大工具，通过传入 SQL 语句和参数
// 能轻松实现数据库的增删改查操作。
// 它会自动管理数据库连接，返回包含执行结果的对象，方便开发者处理后续逻辑