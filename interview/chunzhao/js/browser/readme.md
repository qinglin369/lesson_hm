# js 与浏览器相关常考题

- 图片懒加载
 - clientHeight + scrollTop + offsetTop
   clientHeight  可视区高度
   scollTop 滚动距离
   offsetTop 图片离开父元素的偏移量
- 图片占位符号
<img src="" data-src=""/>
- scroll 事件判断图片是否在可视区
- 节流
- getBoundingClientRect() 可以获取元素的位置与可视区的位置
  比上个方案， 在视窗

- IntersectionObserver 
  实现了监听window的scorll 事件、判断是否在视口中，以及节流三大功能
  - MutationObserver 改变 DOM 树的监听 style  innerHTML
  child
  - ResizeObserver 监听元素的尺寸变化


## 浏览器缓存
 缓存是性能优化的核心

 - 强缓存
   不用发送http请求
   - Expires 过期时间 服务器和客户端可能不一致 http1.0
   - Cache-Control(bug 修订) 过期时间 服务器和客户端一致 http1.1
     Cache-Control:max-age=300 过期时间 300s 或别的值
     private 只能浏览器缓存， 中间的服务器(cdn) 不能缓存
     no-cache 跳过当前缓存， 进入协商缓存
     no-store 不缓存


 - 协商缓存
   需要发送http请求

   强缓存失效后， 浏览器在请求头中携带相应的tag 来向服务器发送请求，由服务器发送请求，
   由服务器根据这个tag 来决定是否使用缓存

   Last-Modified / If-Modified-Since
   最后修改时间 服务器在响应头中加上这个字段
   客户端发送If-Modified-Since , 服务器端校验

   - 小于最新修改时间 返回新的资源
   - 304 使用缓存
   - 200 不使用缓存
   Etag / If-None-Match

   文本的唯一标识(性能开销大), 内容改变了， 标识就会改变


- 区别
 - 精度不同
  etag 精度更高
  Last-Modified 只能精确到秒
 - 性能不同
  etag 性能开销大 生成hash值
  Last-Modified 性能开销小 只记录时间
 
 服务器一般用etag

- 缓存的位置
  - Memory Cache  内存缓存
  - Disk Cache    磁盘缓存
  - Service Worker PWA (Progressive Web AppLication) 离线缓存 类似于App
   SPA 
  

- 浏览器的本地缓存
  - cookie 
    开始的时候不是用来设计为本地存储的， 是为了弥补HTTP  在状态管理上的不足。
    HTTP 是无状态的， 每次请求都是独立的， 无法记录状态
    Cookie 请求头 浏览器中存储的小文本 4kb
    - 容量小
    - 性能缺陷 每次请求都会携带cookie, 浪费带宽
    - 安全缺陷 
      httpOnly 防止XSS攻击
      SameSite

  - localStorage  永久存储 不会发送给服务器端
  - 容量 5M
  - 操作方便
   localStorage.setItem('name','zs')
   getItem


  - sessionStorage 
    会话级别， 窗口关闭， 就不存在了

 - IndexDB 
   浏览器端非关系型数据库

   - 更大容量
   - 支持复杂查询

## if(a == 1 && a == 2) 成立
