import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('@/views/index.vue'),
    meta: {
      title: 'FDA'
    }
  },
  {
    path: '/community',
    name: 'Community',
    component: () => import('@/views/community.vue'),
    meta: {
      title: '社区'
    }
  },
  {
    path: '/pledge',
    name: 'Pledge',
    component: () => import('@/views/pledge.vue'),
    meta: {
      title: '质押'
    }
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('@/views/mine.vue'),
    meta: {
      title: '我的'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
