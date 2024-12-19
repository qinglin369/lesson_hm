console.log(1+"1");
console.log(+"1")
console.log(+[])// 先调用valueOf()无原始值 再调用toString()的空字符串 空为0
console.log(+["1"]);// 最后一个元素没有逗号
console.log(+["1,2,3"]);
console.log(+{})