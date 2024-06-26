import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router'
import nProgress from 'nprogress'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'stHome', // 首页
    component: () => import('../views/Home/index.vue'),
  },
  {
    path: '/about',
    name: 'stAbout', // 关于我们
    component: () => import('../views/About/index.vue'),
  },
  {
    path: '/product',
    name: 'stProduct', // 产品中心
    component: () => import('../views/Product/index.vue'),
  },
  {
    path: '/solution',
    name: 'stSolution', // 解决方案
    component: () => import('../views/Solution/index.vue'),
  },
  {
    path: '/service',
    name: 'stService', // 服务与支持
    component: () => import('../views/Service/index.vue'),
  },
  {
    path: '/contact',
    name: 'stContact', // 联系我们
    component: () => import('../views/Contact/index.vue'),
  },
]

const BASE_URL = import.meta.env.BASE_URL

const router = createRouter({
  history: import.meta.env.DEV
    ? createWebHashHistory(BASE_URL)
    : createWebHistory(BASE_URL),
  routes,
})

router.beforeEach(to => {
  if (to.meta.loaded) return true
  nProgress.start()
  return true
})

router.afterEach(() => {
  nProgress.done()
  return true
})

export default router
