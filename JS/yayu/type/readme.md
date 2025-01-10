# js 类型转换

- es6 之前， js 有多少种类型
-简单数据类型， Primitive(分配在栈内存)，拷贝式赋值
  - String
  - Number
  - Boolean
  - Null
  - Undefined
- 复杂类型， Reference(分配在堆内存)， 引用式赋值
  - Object
  
  -为什么JS 类型会改变？
  Number("1")
  
  - JS 是弱类型语言
  - 变量的类型 是可以改变的
  - 搞清楚变量的确切类型， 大圣来了
   - Primitive -> 其他类型的转换
     
   - Object -> 其他类型

- Boolean 显示类型转换(构造函数)规则
 -false 的情况
  - 为空 false 
  -false
  - undefined
  - 

-true

- +0 -0
 Object.is()
 1/+0, 1/-0  INfinity -Infinity
- NaN 
类型任然是Number, 表示一个特殊的数字
Not a Number

- Number()
 0 1 NaN 
