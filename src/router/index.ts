import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import i18n from '@/i18n'

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
      title: 'TAURUS'
    }
  },
  {
    path: '/node',
    name: 'Node',
    component: () => import('@/views/node.vue'),
    meta: {
      title: '节点认购'
    }
  },
  {
    path: '/community',
    name: 'Community',
    component: () => import('@/views/community.vue'),
    meta: {
      title: 'route.community'
    }
  },
  {
    path: '/pledge',
    name: 'Pledge',
    component: () => import('@/views/pledge.vue'),
    meta: {
      title: 'route.pledge'
    }
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('@/views/mine.vue'),
    meta: {
      title: 'route.mine'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  const title = to.meta.title as string
  if (title) {
    document.title = title.startsWith('route.') ? i18n.global.t(title) : title
  }
})

export default router
