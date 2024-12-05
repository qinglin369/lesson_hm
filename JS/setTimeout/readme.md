# 定时器

-Js是单线程，只有一个主线程
-setTimeout 是异步执行的计时器，会在主线程执行完之后才会执行
 callback 函数 放入 event loop ， 时间(ms)

 -一定会在 指定时间后执行吗？
 -找回？
  执行的是回调函数
  -定时器ID



  如何用 setTimeout 实现 setInterval?
   -场景题
   -手写题 fn
    -custmInterval
    -callback, t 参数
    -可以用setTimout 函数 实现
    -递归
    -关闭？


this
-call
 -函数对象上的方法
箭头函数=>,闭包