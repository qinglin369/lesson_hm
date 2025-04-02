# 如何删除cookie

- cookie 本地存储 请求传输 4KB
- Domain 域名
  document.cookie = 'token=123;domain=baidu.com'
- path 路径
  document.cookie = 'token=123;domain=baidu.com;path=/a/b/c'
- Expires / Max-Age 
  过期了
  
- Secure 只在https 下传输
- HttpOnly 禁止js 读取cookie
- SameSite 限制第三方cookie
 - strict 完全禁止第三方cookie
 - lax 部分限制
 - none 不限制