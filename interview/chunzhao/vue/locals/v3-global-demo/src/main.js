import { createApp } from 'vue'
import './style.css'
import i18n from './i18n.js'
import App from './App.vue'

createApp(App)
.use(i18n) // use是 vue 框架 和生态的接口 
.mount('#app')
