# 显示类型转换和隐式类型转换
- String Number Boolean 函数运行 强制类型转换
- 构造函数 可以new 出对象
-Primitive 怎么转对象

-对象怎么转Primitive

-包装类
"abc".length
"1.23".toFixed(1)
new String("abc")   new Number(1.23)
JS 一切面向对象 自动帮我们包装一下简单数据类型
叫做包装类

- 对象转Primitive  Object => Primitive
 -Boolean
 -String
  toString()
   -Object.prototype.toString.call({a:1}) "[object Object]"]"
   确切类型
    - 数组， 调用原型上的toString()方法
    - 函数  返回源代码 
    - 日期
 -Number


 -Object => Primitive 情理之中
  - String
   -先调用valueOf()方法，如果是原始值，返回。
   -否则调用toString()方法 返回一个原始值。
   - 如果toString()返回的不是原始值，就报错。

   -Object => String|Number
    -toPrimitive 是使命
    -toString
    -valueOf
    -Number 先valuefOf 再toString
     String 先toString 再valueOf
     也在情理之中
     -报错Cannot convert object to primitive value