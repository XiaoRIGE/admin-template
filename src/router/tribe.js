const tribeRoute = [
  {
    path: '/tribe/test1',
    name: 'test1',
    component: () => import('@/views/tribe/index.vue'),
    meta: {
      hideBreadcrumbs: true,
    },
  },
]

export default tribeRoute
