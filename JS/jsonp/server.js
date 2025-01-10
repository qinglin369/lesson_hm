// http 服务启动
// 引入内置http模块
// commonjs规范： node早期        es6模块
const http = require('http');
// 启动http 服务
// 基于请求响应的简单协议

const users = [
    {
        name: '张三',
        age: 18
    },
    {
        name: '李四',
        age: 19
    },
    {
        name: '王五',
        age: 20
    }
]


const server = http.createServer((req, res) => {
    // 回调函数，异步处理
    // 请求来到服务器后，该函数会被执行
    // req 请求对象解析
    // 拿到资源
    // res 响应请求， 
    // http 结束
    res.end("callback("+JSON.stringify(users) + ")")
})

server.listen(3000, () => {
    console.log('server start')
})