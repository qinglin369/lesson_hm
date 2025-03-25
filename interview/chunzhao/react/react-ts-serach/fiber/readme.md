# react fiber 时间切片
eventloop 目的是 把耗时的任务 放到异步队列中，然后在空闲的时候 再去执行，防止阻塞主线程。
- 微任务先执行 有空就渲染 再执行宏任务

- 定时器 
- requestAnimationFrame
- 文档碎片
- 重要？  js 是单线程
  用户体验
  DOM树、响应式业务 到100ms 级别 页面卡顿
  App.vue
    A.vue
     B.vue
      C.vue
       D.vue
        E.vue
         F.vue
组件越复杂(响应式更新),层级越深，渲染越慢

- 组件的渲染或更新  怎么样在一定时间后， 停下来， 让主线程有时间去处理其他任务
后面再去接着执行， react 性能优化的 fiber机制 时间切片

- 用户交互和事件处理 优先级高

- requestAnimationFrame  UI 更新
  callback + 递归调用 时间间隔 1/60
- requstIdleCallback  空闲时间
 - 用户交互， 事件等优先
 - react 16 之后
 - 事件分片 复杂组件或大数据响应式业务（股票k线图）更新
   react 组件渲染 生命周期 虚拟dom diff 渲染 子组件 更新.....100ms
   暂停当前任务， 让主线程有时间去处理其他任务， 下一个周期继续执行任务
    一系列的fiber 子任务
 - 负责任务更多， 和requestAnimationFrame 区别
 - 申请时间切片
 - 浏览器执行完主要任务(渲染，动画，时间...)
 - idle 后执行react fiber 任务
 - timeRemaining 剩余时间到了后 归还执行权

- react fiber 机制？
 是react 16 引入的新特性， 实现了可中断渲染。 它将渲染工分解为小单元(fiber节点), 可暂停，恢复。
 通过requestIdleCallback 和 requestAnimationFrame ， Fiber 在浏览器空闲时执行低优级更新，
 保障用户交互流畅， 解决大型应用长任务(100ms,大量相应数据，股市K线图,DOM 树层级太大)
