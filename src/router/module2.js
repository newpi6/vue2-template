import Layout from '@/layout'

const module2Router = {
  path: '/module2',
  component: Layout,
  name: 'module2',
  meta: {
    title: '模块2',
    icon: 'el-icon-setting',
    module: 'module2'
  },
  module: 'module2',
  children: [
    {
      path: 'home',
      component: () => import('@/views/module2/home'),
      name: 'module2-home',
      meta: { title: '模块2-home', icon: 'dashboard', noCache: true }
    },
    {
      path: 'view1',
      component: () => import('@/views/module2/view1'),
      name: 'module2-view1',
      meta: { title: '模块2-view1', icon: 'dashboard', noCache: true }
    },
    {
      path: 'view2',
      component: () => import('@/views/module2/view2'),
      name: 'module2-view2',
      meta: { title: '模块2-view2', icon: 'dashboard', noCache: true }
    }

  ]
}

export default module2Router
