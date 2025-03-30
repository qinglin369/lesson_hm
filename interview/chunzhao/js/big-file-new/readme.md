# 大文件上传

- 技能点
 - 切片 
  - 体验 快， 稳定
  - 断点续传
   blob 
  http 1.1 管道化 
  多路复用 (二进制帧) http2.0, 并发 更快

- 切完片后 传到服务器的是啥？
  - 切片
  - 合并

- 后端 合并切片
  fs.createWriteStream
  - 前端
  html5 blob file.__proto__  Blob slice
  ForData
  html5 特性? 
  - 后端
  - multiparty 中间件 拿到 post 请求体
  区别于一般的表单请求， 附件
  multiparty是处理表单数据，尤其用于解析含文件上传的POST请求体的中间件
  - 临时放切片
   写入
  - 合并 fs stream
  - 删除切片
  - fs-extra 中间件
  fs-extra是Node.js扩展文件系统模块， 提供更多实用便捷文件操作方法
  - promise.all
  可以合并了
  
- 合并切片
 - /merage 
