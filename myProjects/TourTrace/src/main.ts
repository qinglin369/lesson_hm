
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/main.css'
import App from './App.vue'
import router from './router'
import 'wc-waterfall'
import { Toast } from 'vant';
import lazy from './directives/lazy'


const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(Toast)
app.directive('lazy', lazy);//第一个参数：'lazy'，这是自定义指令的名称。
// 在组件模板里使用这个指令时，要加上 v- 前缀，也就是 v-lazy
app.mount('#app')