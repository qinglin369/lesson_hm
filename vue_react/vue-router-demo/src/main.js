import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 自动导入index.js  ，原本是import router from './router/index.js'
import router from './router'// 路由对象

createApp(App)// vue 根组件 -> 
.use(router) // 挂载路由 
.mount('#app') // -> 挂载点

// app 对象 use 方法
// console.log(app)
// focus 业务
// vue 周边生态就起来了
// app