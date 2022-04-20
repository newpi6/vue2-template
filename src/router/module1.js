import Layout from '@/layout'

const module1Router = {
  path: '/module1',
  component: Layout,
  name: 'module1',
  meta: {
    title: '模块1',
    icon: 'el-icon-setting'
  },
  module: 'module1',
  children: [
    {
      path: 'view1',
      component: () => import('@/views/module1/view1'),
      name: 'module-view1',
      meta: { title: '模块1-view1', icon: 'dashboard', noCache: true }
    },
    {
      path: 'view2',
      component: () => import('@/views/module1/view2'),
      name: 'module-view2',
      meta: { title: '模块1-view2', icon: 'dashboard', noCache: true }
    }
  ]
}

export default module1Router
