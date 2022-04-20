import Layout from '@/layout'

const module3Router = {
  name: 'module3',
  path: 'module3',
  router: {
    path: '/module3',
    component: Layout,
    name: 'module3',
    meta: {
      title: '模块3',
      icon: 'el-icon-setting'
    },
    children: [
      {
        path: 'view1',
        component: () => import('@/views/module2/view1'),
        name: 'module3-view1',
        meta: { title: '模块3-view1', icon: 'dashboard', noCache: true }
      },
      {
        path: 'view3',
        component: () => import('@/views/module2/view2'),
        name: 'module3-view2',
        meta: { title: '模块3-view2', icon: 'dashboard', noCache: true }
      }
    ]
  }
}

export default module3Router
