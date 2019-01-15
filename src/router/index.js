import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Layout from '@/views/layout/Layout'

export const constantRouterMap = [
    { 
        path: '/login',
        component: () => import('@/views/login/Login'), 
        hidden: true 
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