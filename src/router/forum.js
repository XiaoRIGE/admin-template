const forumRoute = [
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
    path: '/forum/ugc-list/ugc-detail',
    name: 'UGCDetail',
    component: () => import('@/views/forum/UGClist/UGCDetail/index.vue'),
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
]

export default forumRoute
