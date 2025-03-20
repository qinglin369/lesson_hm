// vue 源码学习 深入学习
// vue 可以在后端运行
// vue 也是模块化写出来的 reactivity模块
const { 
     // 从 @vue/reactivity 模块中导入 effect 函数，
    // 用于创建响应式副作用，当依赖的响应式数据变化时会重新执行
    effect,
    reactive // vue 响应式
 } = require("@vue/reactivity");
 // 不用挂载到页面上， node 下运行
 let dummy
 // 响应式
 const counter = reactive({
    num1:1,
    num2:2,
 })
 // effect 是一个函数， 里面的代码会立即执行
 // 接受一个函数作为参数
 // 自动更新的是 函数, {{}} computed 生命周期......
 effect( () =>{
    // proxy get 收集依赖
    dummy = counter.num1 + counter.num2
    console.log(dummy,'依赖被执行1');
 })

 effect( () =>{
   // 收集依赖
    console.log(dummy,'依赖被执行2');
 })


 setInterval(() => {
    // proxy set 触发更新
    counter.num1++
 },1000)

 setInterval(() =>{
   // 触发更新
    counter.num2++
 },5000)