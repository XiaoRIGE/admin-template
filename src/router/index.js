import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

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

  // forum
  {
    path: '/forum/pgc-list',
    name: 'PGCList',
    component: () => import('@/views/forum/PGClist/index.vue'),
    meta: {
      hideBreadcrumbs: true,
    },
  },
  {
    path: '/forum/ugc-list',
    name: 'UGClist',
    component: () => import('@/views/forum/UGClist/index.vue'),
  },
  {
    path: '/forum/tag-list',
    name: 'TAGlist',
    component: () => import('@/views/forum/TAGlist/index.vue'),
  },
  {
    path: '/forum/topic-list',
    name: 'TOPIClist',
    component: () => import('@/views/forum/TOPIClist/index.vue'),
  },

  {
    path: '/typography',
    name: 'typography',
    component: () => import('@/views/typography/Typography.vue'),
  },
  {
    path: '/icons',
    name: 'icons',
    component: () => import('@/views/icons/Icons.vue'),
  },
  {
    path: '/cards',
    name: 'cards',
    component: () => import('@/views/cards/Card.vue'),
  },
  {
    path: '/simple-table',
    name: 'simple-table',
    component: () => import('@/views/simple-table/SimpleTable.vue'),
  },
  {
    path: '/form-layouts',
    name: 'form-layouts',
    component: () => import('@/views/form-layouts/FormLayouts.vue'),
  },
  {
    path: '/pages/account-settings',
    name: 'PagesAccountSettings',
    component: () => import('@/views/pages/account-settings/AccountSettings.vue'),
  },
  {
    path: '/pages/login',
    name: 'pages-login',
    component: () => import('@/views/pages/Login.vue'),
    meta: {
      layout: 'blank', // 标志是否需要加载左侧布局
    },
  },

  {
    path: '/pages/register',
    name: 'pages-register',
    component: () => import('@/views/pages/Register.vue'),
    meta: {
      layout: 'blank',
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
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
