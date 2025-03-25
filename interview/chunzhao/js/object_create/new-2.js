// 手写 new 
function myNew(Constructor, ...args) {
    const obj = Object.create(Constructor.prototype);
    const result = Constructor.apply(obj,args);// 执行构造函数
    return result && typeof result === 'object'? result : obj;
}

function Person() {
    this.greet = function() {
      return 'hello' 
    }
}
const obj = myNew(Person, 'zhangsan', 18);
  console.log(obj);
  console.log(obj.__proto__,Person.prototype)
// 老版本
function objectFactory() {
   var obj = new Object()//从Object.prototype上克隆一个空的对象
   Constructor = [].shift.call(arguments);
   obj.__proto__ = Constructor.prototype;

   // 以 obj 作为 this 上下文执行构造函数，并传入剩余参数
   var ret = Constructor.apply(obj, arguments);
   return ret && typeof ret === 'object' ? ret : obj; 
}
// 如果不明确指定参数，函数内部会有一个特殊的对象 arguments，
// 它是一个类数组对象，包含了调用该函数时传入的所有参数。
// 你可以在函数内部通过 arguments 对象访问这些参数



// 如果构造函数显式返回一个对象（包括数组、函数等引用类型，
// 但不包括 null），那么 new 操作符或者
// 模拟 new 操作符的函数最终会返回这个显式返回的对象，
// 新创建的实例对象将被忽略，也就无法继承构造函数中通过 this 添加的属性和方法