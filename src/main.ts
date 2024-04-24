import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/style/style.css'
import App from './App.vue'
// 全局引入element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
const pinia = createPinia()

app
  .use(ElementPlus)
  .use(pinia)
app.mount('#app')
