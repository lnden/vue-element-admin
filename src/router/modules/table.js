/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const tableRouter = {
    path: '/table',
    component: Layout,
    redirect: '/table/complex-table',
    name: 'Table',
    alwaysShow: true,
    meta: {
        title: 'table',
        icon: 'nav-table'
    },
    children: [
        {
            path: 'dynamic-table',
            component: () => import('@/views/table/dynamicTable/index'),
            name: 'DynamicTable',
            meta: { title: 'dynamicTable' }
        },
        {
            path: 'drag-table',
            component: () => import('@/views/table/dragTable'),
            name: 'DragTable',
            meta: { title: 'dragTable' }
        }
    ]
}
export default tableRouter