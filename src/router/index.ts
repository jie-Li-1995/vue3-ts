import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const layout = () => import('@/views/layout.vue')
const homeView = () => import('../views/Home.vue')
const aboutView = () => import('../views/About.vue')
const slotView = () => import('../views/Slot.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: 'main' }
  },
  {
    path: '/main',
    name: 'main',
    component: layout,
    redirect: { name: 'home' },
    children: [
      {
        path: 'home',
        name: 'home',
        component: homeView
      },
      {
        path: 'about',
        name: 'about',
        component: aboutView
      },
      {
        path: 'slot',
        name: 'slot',
        component: slotView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
