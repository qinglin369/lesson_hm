## 编程题
 -面试比较难的编程题
 -准备工作·
  1.以写函数为主
  2.返回电话号码格式的·字符串
  3准确就能通过运行
  
-简单题
 -数组输入 -> 字符串的拼接 机械
  功能实现了
-有什么可以优化的？
  -一流的工程师在完成功能后， 考虑优化， 可读性将是一个重要的标准
  作为一个电话号码的模版来处理 更好理解 语义化
  es6 字符串模版 es5 是没有这个功能的。 es6  提升了es5的代码的可读性

  - 编程 机械式的代码 尽量优化为 语义更好的代码 提升代码的可读性
  - 还有别的解法不？ 多种解法 
   for循环 +string api?
   
   -变量带给程序状态能力
   
-简单的编程题， 面试官已经了解了我们的能力
 -快速编码逻辑能力
 -是否会es6
 -提升代码的可读性
 -有没有别的解法 (深厚)
  -变量状态
   初始状态(xxx) xxxx-xxxx
   一个x 都没有 完成状态 可以 返回了。

 ## 八股文 
  -var 变量 js 弱类型语言
   name undefined   变量提升？ 编译阶段
   为什么要给undefined 是为了分配空间  别人不可以占有 这个空间
 -执行阶段 name="wql"
undefined->string 动态性
-变量的类型由值决定


- java 有 .java(代码文件)->javac compile .o 二进制文件->在运行
 独立的编译阶段
 任何语言都要编译
 js没有独立的编译阶段， js 在运行之前有一个短暂的编译过程， js 和 python 都是脚本语言 不需要单独编译
 

 -变量提升的时候， 区别对待
 -var 申明的变量 undefined
 - 函数 提升， 不只是提升 值也会提升
 -let const 不会提升  暂时性死区
 
 -作用域 scope（查找变量的规则）
  变量一定属于某个作用域
  查找变量的规则


-执行上下文 context
 执行上下文 是执行阶段的上下文 为即将到来的代码执行执行做准备

 -属于调用栈
 js 执行的底层机制 （正常运行的关键）
 如果有函数的话，继续编译（动态编译），
 函数的执行上下文 变量环境（局部作用域）
 全局变量在栈底

 
 js 代码要执行<-执行机制（调用栈）<-函数入栈（操作系统）<-执行上下文（代码和变量申明的关系）<-作用域+变量提升+可运行的代码《-运行阶段