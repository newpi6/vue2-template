import Layout from '@/layout'

const module3Router = {
  path: '/module3',
  component: Layout,
  name: 'module3',
  meta: {
    title: '模块3',
    icon: 'el-icon-setting'
  },
  children: [
    {
      path: 'home',
      component: () => import('@/views/module2/home'),
      name: 'module3-home',
      meta: { title: '模块3-home', icon: 'dashboard', noCache: true },
      children: [
        {
          path: 'home-1',
          component: () => import('@/views/module2/home'),
          name: 'module3-sub1',
          meta: { title: '模块3-home1', icon: 'dashboard', noCache: true }
        },
        {
          path: 'home-2',
          component: () => import('@/views/module2/home'),
          name: 'module3-sub2',
          meta: { title: '模块3-home2', icon: 'dashboard', noCache: true }
        }
      ]
    },
    {
      path: 'view1',
      component: () => import('@/views/module2/view1'),
      name: 'module3-view1',
      meta: { title: '模块3-view1', icon: 'dashboard', noCache: true }
    },
    {
      path: 'view2',
      component: () => import('@/views/module2/view2'),
      name: 'module3-view2',
      meta: { title: '模块3-view2', icon: 'dashboard', noCache: true }
    }

  ]
}

export default module3Router
