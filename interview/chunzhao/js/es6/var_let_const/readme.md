- 作用域
 var 不支持块级作用域 , let 和 const 支持块级作用域， 这是js 满足大型项目的需要
- 变量提升
 var 存在变量提升并初始值为undefined, let 和 const 会提升但是有暂时性死区（TDZ）
 在申明前访问汇报 referenceError
- 重复声明
 var 可以重复声明，后声明的会覆盖前面的， let 和 const 不可以重复声明，会报错
- 全局污染
 var 挂在window 上， let 和 const 不会

 - 修改性
  var 和 let 可以修改， const 申明的常量不可修改， 但是可以修改数组和对象的属性
