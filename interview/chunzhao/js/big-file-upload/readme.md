# 大文件上传

- 问题，直接传
 等好久 ，太大容易失败
 如果中途断开，就需要重新上传(让人很不爽，还费流量)


- 切片
 1G 50片
 重传
 断点续传
 - 切片大小的规则
  一般推荐的切片大小为1-5Mb 2Mb
   较大的切片能减少HTTP请求数， 提高效率(多路复用的上限)
   但过大会增加请求失败重试的成本
   较小的切片会增加请求数量及服务器压力(并发数 有上限， 性能开销大)(用户爽了，服务器不爽了)
- 切片是什么？
slice  为什么有slice方法 File._proto_ = Blob.prototype.slice(继承了原型链上的方法)
File (整体) -> Blob(二进制对象) 二进制(text/md img/jpg)
Blob 帮前端处理二进制数据
切片是Blod, 上传的是二进制对象


- http
 大文件 普通上传 1个http 连接
 分片 http 2.0 多路复用（一个TCP/IP连接可以同时发送多个HTTP请求）
 二进制流式(流ID)
 - HTTP 2.0核心特性可概括为：二进制分帧、多路复用、头部压缩、服务器推送提效

- 用户体验
 进度条 暂停 断点续传
  - input type= file 比较丑
  - 进度条是用户体验的一部分，它可以让用户了解进度，告知用户发生了什么。
  - 

- 全栈
  - 前端 upload  复杂
    - File 对象 html5 新特性 让js可以访问文件系统
    - Blob
    - FormData 表单对象 append
    - es6 map 表演
     blob 数组 -》blob 详细信息数组 -》formData 数组 -》 axios q
  - 后端

- 写一篇， 理解深度
