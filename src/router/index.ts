import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('.././views/home/index.vue')
  },
  {
    path: '/personal',
    name: 'personal',
    component: () => import('.././views/personal/index.vue')
  }
]


// 创建路由对象
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
