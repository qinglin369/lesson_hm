import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../pages/Home.vue'
// import About from '../pages/About.vue'
// import Login from '../pages/Login.vue'
// 优化：使用懒加载

//  路由配置数组
const routes = [
  {
    path: '/',
    name: 'Home',
    // 路由懒加载
    component: () => import('../pages/Home.vue'),
    meta: {
      title: '首页',
      requireLogin: true,
    },
    childre: [
        {
         path: '/about',
         name: 'About',
         component: () => import('../pages/About.vue'),
         
         meta: {
            title: '首页',
            requireLogin: true,
          },
        }
    ]
  },
  {
    path:'/login',
    name:'login',
    component: () => import('../pages/Login.vue'),
    meta: {
      title: '登录',
      requireLogin: false,
    }
  }
]


// 实例化路由对象
const router = createRouter({
  history: createWebHistory(),
//   routes:routes
// es6的语法 优化一下
 
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
    //细节默认值
  document.title = to.meta.title || '稀土掘金'
  if(to.meta.requireLogin) {
    next('/login')
    return 
  }
  next()
})

export default router