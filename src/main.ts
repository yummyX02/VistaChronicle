import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/style/style.css'
import App from './App.vue'
// 全局引入element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 引入路由
import router from './router'
// 引入tailwindcss
import 'tailwindcss/tailwind.css'
import './input.css'

const app = createApp(App)
const pinia = createPinia()
// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app
  .use(ElementPlus)
  .use(pinia)
  .use(router)
app.mount('#app')