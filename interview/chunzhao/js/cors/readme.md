- 同源策略
 同一个公司不同部门可能要用到跨域，跨域是家常便饭

<script> 标签的 src 属性不受同源策略限制这一特性，正是 JSONP（JSON with Padding）解决跨域问题的核心思路
- jsonP 有啥缺点？
- 不安全
<script src=""> </script> 
<script>
fetch('')
</script>XSS (注入恶意脚本) 攻击
callback(data)
- 只支持 GET方法，不能post
  script src 不能发送post 等待其他请求
- 会阻塞页面渲染， 影响性能
- 不太好处理HTTP 错误， 回调函数只在成功时调用
现代应用推荐 CORS 代替JSONP

- CORS
 跨域资源共享
 Access-Control-Allow-Origin: *
 服务器设置允许跨域的域名
 跨域白名单
 - 允许跨域的域名数组
 - req.headers.origin
 - indexOf 判断是否包含
 - 服务器设置响应头 Access-Control-Allow-Origin origin || *
 Access-Control-Allow-Methods GET POST  OPTIONS
   允许的请求方法
 Access-Control-Allow-Headers
   允许的请求头
 Access-Control-Allow-Credentials
   允许携带cookie
 Access-Control-Max-Age
   预检请求的缓存时间

- 预检请求
 - 简单请求
  - GET POST HEAD (用于询问服务器资源的头部信息)
 - 复杂请求,询问服务器同不同意
  - PATCH PUT DELETE ....
  - 发送两个请求到服务器
   - OPTIONS  用于查询针对服务器上特定资源支持的通信选项，通常用来检查跨域请求是否被允许。

- webscoket
 不受同源策略限制
 消息机制
 101 switching protocol


- postMessage html5 新特性
 iframe 标签
 一个网页(A) , 嵌入(ifram)另一个网页比如支付宝(B)
 不跨域

- vite proxy 反向代理