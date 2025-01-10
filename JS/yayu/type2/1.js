var a = 1.2;
console.log(typeof a);// Number
var b = new Number(a);// Number 对象
console.log(typeof b);// Object
console.log(b.toFixed(1)); // "1.2"
// 面向对象极致风格 toFixed(a) 函数式
console.log(a.toFixed(1)); // "1.2" 包装类
(new Number(a)).toFixed();
//操作完之后 还是number 对象就销毁了