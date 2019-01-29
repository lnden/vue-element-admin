import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Layout from '@/views/layout/Layout'
import componentsRouter from './modules/components'
import errorsRouter from './modules/errors'

export const constantRouterMap = [
    { path: '/login', component: () => import('@/views/login/index'), hidden: true},
    { path: '/401', component: () => import('@/views/error/401'),hidden: true },
    { path: '/404', component: () => import('@/views/error/404'),hidden: true },
    {
        path: '/redirect',
        component: Layout,
        hidden: true,
        children: [
          {
            path: '/redirect/:path*',
            component: () => import('@/views/redirect/index')
          }
        ]
    },
    {
        path: '',
        component: Layout,
        redirect: 'dashboard',
        children: [
          {
            path: 'dashboard',
            component: () => import('@/views/dashboard/index'),
            name: 'Dashboard',
            meta: { title: 'dashboard', icon: 'nav-dashboard', noCache: true }
          }
        ]
    },
    {
        path: '',
        component: Layout,
        redirect: 'dashboard',
        children: [
            {
                path: 'guide',
                component: () => import('@/views/guide'),
                name: 'Dashboard',
                meta: { title: 'guide', icon: 'nav-guide', noCache: true }
            }
        ]
    },
    componentsRouter,
    errorsRouter,
    {
        path: '',
        component: Layout,
        redirect: 'setting',
        children: [
            {
                path: 'setting',
                component: () => import('@/views/guide'),
                name: 'setting',
                meta: { title: 'systemset', icon: 'nav-setting', noCache: true }
            }
        ]
    }
]

export default new Router({
    routes:constantRouterMap
})

export const asyncRouterMap = [
    // 异步加载的
    {
        path: '/system',
        component: Layout,
        alwaysShow: true,
        name: '系统管理',
        meta: {
            title: '系统管理',
            icon: 'nav-system',
            roles: ['admin', 'editor']
        },
        // children: [
            // {path: 'organization', component: () => import('@/views/system/organization/Organization.vue'), name:'组织机构管理', meta: {title:'组织机构管理', roles: ['admin']}},
            // {path: 'knowledge', component: () => import('@/views/system/knowledge'), name:'知识体系管理', meta: {title:'知识体系管理', roles: ['admin']}},
            // {path: 'user', component: () => import('@/views/system/user/User.vue'), name:'用户管理', meta: {title:'用户管理', roles: ['admin']}},
            // {path: 'permission', component: () => import('@/views/system/permission/Permission.vue'), name:'角色权限管理', meta: {title:'角色权限管理', roles: ['admin']}},
            // {path: 'classes', component: () => import('@/views/system/classes/Classes.vue'), name:'班次管理', meta: {title:'班次管理', roles: ['admin']}},
            // {path: 'indicatorsmanage', component: () => import('@/views/system/indicators/indicatorManage.vue'), name:'指标管理', meta: {title:'指标管理', roles: ['admin']}},
            // {path: 'indicatorstypemanage', component: () => import('@/views/system/indicators/indicatorTypeManage.vue'), name:'指标类型管理', meta: {title:'指标类型管理', roles: ['admin']}},
            // {path: 'cost', component: () => import('@/views/system/Cost.vue'), name:'成本类型管理', meta: {title:'成本类型管理', roles: ['admin']}, hidden: true},
        // ]
    },
    {
        path: '*',
        redirect: '/404',
        hidden: true
    }
]
