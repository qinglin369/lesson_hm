# 队列
push（）时间复杂度O(1)，但是触发扩容的时间复杂度O(n)

- 何为队列?
FIFO 的线性数据结构


- 受限
  push 
  shift   出队
  unshift 队首 插队
  pop    


- 封装
  - 复用
  - 含有难点和不想别人更改的点(禁区)，# 私有变量
  几十人一起coding的大场面


- 使用es6 封装一个 队列， 容量为capacity， 动态扩容

- 为了支持capacity
  #front
  new Array(capacity)? //  内存分配连续
  this.size
  给定capacity ， 我们可以
  更好的利用CPU 缓存


- 用数组实现队列 更快
容量到达后 来一次 o(n) 扩容， 平均下来依然更优
-链表实现队列 执行速度是一样的

容量的好处是
数组 内存地址 1000-1019 CPU 访问 下标 0 时，
CPU 就可以将1000-1019的数据全部加载到CPU的缓存区中，
