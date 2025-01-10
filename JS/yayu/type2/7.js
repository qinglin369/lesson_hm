// 只要不是数字， + 连接符
// 二元运算符
console.log([]+[])// 数组的valueOf()就是它本身
// 一元运算符 隐式类型转换
console.log(+[]);// "" => 0
console.log(+['1,2,3'])
console.log([]==[])// false 地址不同
console.log(+{});// {} => {} => NaN ,一元+号尝试转为Number
console.log([]+{})
console.log({}+{})
console.log(42 == '42')
console.log(true == '2')//转数字

console.log(1 == "2")// 转数字



let x = 42
let y = {
    toString: function(){
        return "42"
    }
}

console.log(x==y)// y是对象，会调用valueOf()，返回42，再比较
