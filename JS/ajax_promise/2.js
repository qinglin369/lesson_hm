// 实例化时，传递一个函数，里面装耗时性任务
const p =new Promise(() => { // 同步任务
    console.log('3333') // 同步任务
    setTimeout( () => { // 异步任务 event
        console.log('2222') 
        console.log('1')
    },1000)
})

console.log('111')