import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw} from 'vue-router'
// : 声明一个类型 RouteRecordRaw 一个route 类型 RouteRecordRaw[] route数组
const routes :RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        meta:{
            title: '首页',
            cache:true
        },
        redirect:'/wallCard',
        component: () => import('../views/Home.vue'),
        children: [
            {
                path:'/wallCard/:user_id',
                name: 'wallCard',
                meta:{
                    title: '留言墙',
                    cache:true
                },
                component: () => import('../components/WallCard.vue')
            },
            {
                path:'/wallCard',
                name: 'wallCardWithoutId',

                meta:{
                    title: '留言墙',
                    cache:true
                },
                component: () => import('../components/WallCard.vue')
            },
            {
                path:'/video/:user_id',
                name: 'Video',
                meta:{
                    title: '视频墙',
                    cache:true
                },
                component: () => import('../components/Video.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        meta:{
            title: '登录',
            cache:true
        },
        component: () => import('../views/Login.vue')
    },
    {
        path:'/userInfo/:userId',
        name:'UserInfo',
        meta:{
            title: '用户信息',
            cache:true
        },
        component: () => import('../views/UserInfo.vue')
    },
    {
        path:'/contentDetail/:content_id',
        name: 'Detail',
        meta:{
            title: '详情',
            cache:true
        },
        component: () => import('../components/Detail.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 全局前置守卫


export default router