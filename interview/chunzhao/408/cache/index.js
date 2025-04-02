const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')
const crypto = require('crypto');// 加密

http.createServer((req, res) => {
    let { pathname } = url.parse(req.url,true);
    // console.log(pathname)
    if (pathname === '/') {
        // 管道
        // __dirname 项目根目录的物理路径
        // 项目可能要移动， 部署在服务器上
        fs
        .createReadStream(path.join(__dirname, 'index.html'))
        .pipe(res)
        return;
    }

    // 
    let abs = path.join(__dirname, pathname);
    // console.log(abs);
    // 文件状态信息
    // 强缓存
    // res.setHeader('Expires', new Date(Date.now() + 20000).toGMTString());
    // res.setHeader('Cache-Control','max-age=20')

    // ... existing code ...
    fs.stat(abs, (err, stat) => {
        // 先检查是否有错误
        if (err) {
            res.statusCode = 404;
            res.end('Not Found');
            return;
        }
        // 确保 stat 有值再访问其属性
        console.log(stat.mtime.toGMTString(), '//////');
        res.setHeader('Last-Modified', stat.mtime.toGMTString());

        // 协商缓存
        if (req.headers['if-modified-since'] === stat.mtime.toGMTString()) {
            res.statusCode = 304;
            res.end('Not Modified');
            return;
        }

        if (stat.isFile()) {
            fs.createReadStream(abs).pipe(res);
        }
    })

})
.listen(8080);
