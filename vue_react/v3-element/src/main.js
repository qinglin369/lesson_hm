import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import Element3 from 'element3'
//按需引入，减小性能开销，优化到极致
import {
  ElButton,
} from 'element3'
//引入样式包
import 'element3/lib/theme-chalk/index.css'
import router from './router'
import { createPinia } from 'pinia'

createApp(App)
.use(router)
.use(ElButton) // UI组件库
.use(pinia)
.mount('#app')

