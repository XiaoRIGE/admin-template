import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const files = require.context('./', true, /\.(js)$/)

const routeArr = []
files.keys().forEach((key) => {
  const routeItem = files(key).default
  if (key !== './index.js') routeArr.push(...routeItem)
})

const routes = [
  {
    path: '/',
    redirect: 'dashboard',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
    meta: {
      hideBreadcrumbs: true,
    },
  },

  ...routeArr, // 各个模块的路由

  {
    path: '/pages/login',
    name: 'pages-login',
    component: () => import('@/views/pages/Login.vue'),
    meta: {
      layout: 'blank', // 标志是否需要加载左侧布局
    },
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/Error.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '*',
    redirect: 'error-404',
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})

export default router
