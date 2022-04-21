import Layout from '@/layout'

const moduleName = 'module1'

const module1Router = {
  path: '/module1',
  component: Layout,
  name: 'module1',
  meta: {
    title: '模块1',
    icon: 'el-icon-setting'
  },
  children: [
    {
      path: 'home',
      component: () => import('@/views/module1/home'),
      name: 'module1-home',
      meta: { title: '模块1-home', icon: 'dashboard', noCache: true }
    },
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

console.log('++++++++++++++++')
module1Router.meta['module'] = moduleName
console.log(module1Router.meta)
module1Router.children.forEach((value, index) => {
  value.meta['module'] = moduleName
})
console.log('++++++++++++++++')

export default module1Router
