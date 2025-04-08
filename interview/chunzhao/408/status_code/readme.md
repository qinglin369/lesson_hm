请介绍下302， 304 状态码

304 Not Modified 

302 临时重定向， 301 永久重定向(一律get)  307 临时重定向， 308 永久重定向(保持请求的方法)

301：Moved Permanently
302：Found
307：Temporary Redirect
308：Permanent Redirect

## 分类
- 1xx   Informational 信息状态码
 101 Switching Protocols 切换协议
- 2xx 成功状态码
 200 OK
 201 Created
 202 Accepted

- 4xx 客户端错误状态码
 400 Bad Request 客户端请求的语法错误，服务器无法理解
 401 Unauthorized 未授权
 403 Forbidden 禁止访问
 404 Not Found 未找到
 405 Method Not Allowed 方法不允许
 406 Not Acceptable 不可接受

- 5xx 服务器错误状态码
