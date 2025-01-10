// common js 早期模块化方案
// js 早期没有 模块化方案
// 函数、类（js 没有 class），业务简单页面交互等 
// 幻灯片 轮播图  js就干这事
// 越来越复杂，需要文件分离，模块化方案
const sqlite3 = require('sqlite3');

// 后端逻辑和数据库逻辑是分开的
// db数据库连接对象,数据库操作句柄
// 路径
// I/O 操作 耗时
const db = new sqlite3.Database('./mysatabase.db',
    async(err) =>{
        if(err){
            console.log('数据库连接失败', err);
            return;
        }else{
            console.log('数据库连接成功');
        }

    //数据库操作句柄
    await db.run(`
        create table if not exists employee(
            id integer primary key ,
            name text not null ,
            department text not null,
            salary integer not null
        )`)
    // err 是否出错
    // node js 快 ms 级别
    // 数据库在别的服务器/硬盘上 秒级别
    // await 异步
    }
)