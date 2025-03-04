// 高阶函数
// 函数的参数或者返回值是函数 为高阶函数
function reverseStr(str) {
    // return [...str].reverse().join('')
    // reduce es6 api 
    return [...str].reduce((reversed,char) => char + reversed,'')
}

console.log(reverseStr('hello'));