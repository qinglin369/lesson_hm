
// 分的越细，越容易维护，复用性高
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
  // 组合toUpperCase和hello -> greet
  // 高阶函数(返回值是函数的函数)
  // var greet = function(x) {
  //   return hello(toUpperCase(x));
  // }
  // 具体
  // var greet2 = function(x) {
  //   return hello(toLowerCase(x));
  // }
  
  // 组合抽象函数 C = A(B(x)) 
  
  // console.log(greet('kevin'))

//   手写compose 组合函数 
//   var compose = function(f, g) {
//     // 闭包
//     return function(x) {
//       return f(g(x));
//     }
//   }
  
//   var greet = compose(hello, toUpperCase);
//   console.log(greet('kevin'));


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

    var greet = compose(hello, toUpperCase);
    console.log(greet('kevin'));
    
//   为什么第一步是apply后面是call
