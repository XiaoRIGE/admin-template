const reportRoute = [
  {
    path: '/report/test2',
    name: 'test2',
    component: () => import('@/views/report/index.vue'),
    meta: {
      hideBreadcrumbs: true,
    },
  },
]

export default reportRoute
