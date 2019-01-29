
import Layout from '@/views/layout/Layout'

const errorsRouter = {
    path: '/error',
    component: Layout,
    redirect: 'noredirect',
    name: 'Error',
    meta: {
        title: 'error',
        icon: 'nav-error'
    },
    children: [
        {
            path: '401',
            component: () => import('@/views/error/401'),
            name: 'Page401',
            meta: { title: '401', noCache: true }
        },
        {
            path: '404',
            component: () => import('@/views/error/404'),
            name: 'Page404',
            meta: { title: '404', noCache: true }
        },
        {
            path: 'info',
            component: () => import('@/views/error/401'),
            name: 'PageInfo',
            meta: { title: 'errorinfo', noCache: true }
        },
    ]
}

export default errorsRouter;
