import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Layout from '@/views/layout/Layout'
import componentsRouter from './modules/components'
import errorsRouter from './modules/errors'
import tableRouter from './modules/table'

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
        path: '/guide',
        component: Layout,
        redirect: 'dashboard',
        children: [
            {
                path: '',
                component: () => import('@/views/guide'),
                name: 'guide',
                meta: { title: 'guide', icon: 'nav-guide', noCache: true }
            }
        ]
    },
    {
        path: '/icon',
        component: Layout,
        children: [
            {
                path: 'index',
                component: () => import('@/views/svg-icons'),
                name: 'Icons',
                meta: { title: 'icons', icon: 'nav-icon', noCache: true }
            }
        ]
    },
    componentsRouter,
    errorsRouter,
    tableRouter,
    {
        path: '/excel',
        component: Layout,
        redirect: '/excel/export-excel',
        name:'Excel',
        meta: {
            title:'excel',
            icon: 'nav-excel'
        },
        children: [
            {
                path: 'export-excel',
                component: () => import('@/views/excel/exportExcel'),
                name: 'ExportExcel',
                meta: { title: 'exportExcel' }
            },
            {
                path: 'select-excel',
                component: () => import('@/views/excel/selectExcel'),
                name: 'SelectExcel',
                meta: { title: 'selectExcel' }
            },
            {
                path: 'upload-excel',
                component: () => import('@/views/excel/uploadExcel'),
                name: 'UploadExcel',
                meta: { title: 'uploadExcel' }
            }
        ]
    },
    {
        path: '/pdf',
        component: Layout,
        redirect: '/pdf/index',
        name: 'Pdf',
        alwaysShow: false,
        meta: {
            title: 'pdf',
            icon: 'nav-pdf'
        },
        children: [
            {
                path: 'index',
                component: () => import('@/views/pdf/index'),
                name: 'PDF',
                meta: { title: 'pdf', icon: 'nav-pdf' }
            }
        ]
    },
    {
        path: '/setting',
        component: Layout,
        redirect: '/setting/user',
        name:'setting',
        meta: {
            title:'systemset',
            icon: 'nav-setting'
        },
        children: [
            {
                path: 'user',
                component: () => import('@/views/home/Home'),
                name: 'user',
                meta: { title: 'user' }
            },
            {
                path: 'manageuser',
                component: () => import('@/views/home/Home'),
                name: 'userManage',
                meta: { title: 'userManage' }
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
