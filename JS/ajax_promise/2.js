// 实例化时，传递一个函数，里面装耗时性任务
const p =new Promise(() => { // executor
    console.log('3333') // 同步任务
    
    setTimeout( () => { // 异步任务 event loop
        console.log('2222') 
        console.log('1')
    },1000)
})
// 异步任务的执行顺序控制的话 用Promise
console.log(p.__proto__)
p.then(() => {
    // 等到exector 异步任务执行完后，再执行then里面的回调函数
    console.log('1111')
})
console.log('====')