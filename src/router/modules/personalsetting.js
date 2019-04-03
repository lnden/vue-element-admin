
const PersonalSetting = {
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
            path: 'log',
            component: () => import('@/views/error/401'),
            name: 'log',
            meta: { title: 'log', noCache: true }
        },
    ]
}

export default PersonalSetting;
