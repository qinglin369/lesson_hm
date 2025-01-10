//基本数据类型的显示类型转换之Number
// Number 
console.log(Number());
// NaN uundefined 在数值上下文当中没有转成特定数字的含义
console.log(Number(undefined));
// 0 
console.log(Number(null));// 值为空
// 0
console.log(Number(false));
// 1
console.log(Number(true));
console.log(Number("123"));
console.log(Number("-123"));
// 16进制
console.log(Number("0x11"));

console.log(Number(""),Number(" "));
console.log(Number("100a"))