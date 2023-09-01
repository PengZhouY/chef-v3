import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import 'animate.css'
import router from './router'
import pinia from './store'
import 'virtual:svg-icons-register'
import 'normalize.css'

// 获取环境变量
console.log(import.meta.env)

createApp(App).use(createPinia).use(pinia).use(router).mount('#app')
