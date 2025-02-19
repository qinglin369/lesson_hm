// 字符大写
var toUpperCase = function(x) {
    return x.toUpperCase();
}
// 小写
var toLowerCase = function(x) {
    return x.toLowerCase();
}
// 字符拼接
var hello = function(x) {
    return 'HELLO, ' + x; 
}

// 手写compose 组合函数 
var compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function(x) {
        var i = start;
        var result = args[start].call(this, x);
        while (i--) {
            result = args[i].call(this, result);
        }
        return result;
    }
}

// 调用 compose 函数，返回一个新的组合函数
var greet = compose(hello, toUpperCase);
// 调用组合函数
console.log(greet('kevin'));
