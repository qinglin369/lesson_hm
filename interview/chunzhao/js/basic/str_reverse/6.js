function reverseStr(str) {
    // 正则表达式 . 匹配任意字符
    // g 全局匹配 : 匹配所有 若不加 只匹配第一个
     (str.replace(/./g,(char)=>str.char)).split('').reverse().join('')

}

console.log(reverseStr('hello'));