# 虚拟DOM virtual dom
人生唯一不变的就是改变，变化才是常态(数据更新)
组件也是对象

- 比对差异之后修修补补就行了 无需替换整个dom (重绘重排)

- 虚拟dom 是**真实dom**在内存中的轻量级副本
 - 内存之中的对象 (描述真实dom)
 - 新旧两颗虚拟dom树 diff patches
 - 根据差值一次作用到dom 更新中 

- 以下dom 片段的虚拟dom 对象是?
  - 虚拟dom非常方便的描述真实dom
  - type,props, children([]) + 递归(树)
  - 文本节点直接给文字

- 什么时候生成虚拟dom?
  template 编译 -> 生成VNode -> render -> 生成真实dom
  响应式 update 数据状态发生变化 -> 如果没有虚拟dom 直接生成真实dom -> 整个替换（重绘重排）
  虚拟DOM 生成新的Virtual Node 内存中 比较新旧两颗VNode 
  非常有针对性 一次性收集所有 修改 patches 打包给 DOM 一次性更新

- v-for key ？ 列表当中 
 增 删 改 移动
 ABCD -> DABC(key是用来标识的，若无key都是li 没办法识别ABCD)
 - 顺序改变   这也是不能用index做key的原因
 - Vue 中 h 函数用于创建虚拟 DOM 节点，接收标签名、属性和子节点等参数。

 ## diff算法
 两颗新旧虚拟DOM树
 patches 补丁[]
 时间复杂度 

 - 暴力
  - 每个VNode 都去对比O(n)
  - 每个VNode 的属性 对比O(n)
  - VNode 的childeren 比对O(n)
   O(n^3)
   1000*1000*1000 1亿次
  - 丈母娘要你38万彩礼，还要你入赘一样，不能接受的。

 
 - 只做**同层**比较 O(n) -> O(1)
 - **type** 变了 就不再比较子节点 O(n)->O(1)，直接删除旧节点，新增新节点
   div   div
    ul    span 一个节点都没有
     li
     li
- 属性的比较 O(n)
O(n^3) -> O(n)
- 省去性能开销的无底洞

- 解决所有问题? 同层五个节点
 ABCDE  EABCD
 A E type 不一样  会删除A 新增E 以此类推
不能判断类型， 如果有唯一的key 来判断 就不会删除A 新增E，而是移动位置
列表里面有移动操作

- 新的 vnode 数组之中记录的顺序就是目标顺序。 所以把对应的节点按照新 vnode 数组的顺序移动就好了。

EABCD(新)   ABCDE(旧)
i=0 j=0 lastIndex=0
