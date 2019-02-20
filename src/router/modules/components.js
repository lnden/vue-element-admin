/** When your routing table is too long, you can split it into small modules**/


import Layout from '@/views/layout/Layout'

const componentsRouter = {
    path: '/components',
    component: Layout,
    redirect: 'noredirect',
    name: 'ComponentDemo',
    meta: {
        title:'components',
        icon: 'nav-component'
    },
    children: [
        {
            path: 'tinymce',
            component: () => import('@/views/components-demo/tinymce'),
            name: 'TinymceDemo',
            meta: { title: 'tinymce' }
        },
        {
            path: 'markdown',
            component: () => import('@/views/components-demo/markdown'),
            name: 'MarkdownDemo',
            meta: { title: 'markdown' }
        },
        {
            path: 'json-editor',
            component: () => import('@/views/components-demo/jsonEditor'),
            name: 'JsonEditorDemo',
            meta: { title: 'jsonEditor' }
        },
        {
            path: 'splitpane',
            component: () => import('@/views/components-demo/splitpane'),
            name: 'SplitpaneDemo',
            meta: { title: 'splitPane' }
        },
        {
            path: 'avatar-upload',
            component: () => import('@/views/components-demo/avatarUpload'),
            name: 'AvatarUploadDemo',
            meta: { title: 'avatarUpload' }
        },
        {
            path: 'pdf',
            component: () => import('@/views/pdf'),
            name: 'pdf',
            meta: { title: 'PDF' }
        },
        {
            path: 'download',
            component: () => import('@/views/pdf/download'),
            name: 'download',
            meta: { title: 'download' },
            hidden: true
        },
        {
            path: 'count-to',
            component: () => import('@/views/components-demo/countTo'),
            name: 'CountToDemo',
            meta: { title: 'countTo' }
        },
        {
            path: 'clipboard',
            component: () => import('@/views/clipboard'),
            name: 'clipboard',
            meta: { title: 'clipboard' }
        },
        {
            path: 'sticky',
            component: () => import('@/views/components-demo/stickyTop'),
            name: 'StickyDemo',
            meta: { title: 'sticky' }
        },
        {
            path: 'back-to-top',
            component: () => import('@/views/components-demo/backToTop'),
            name: 'BackToTopDemo',
            meta: { title: 'backToTop' }
        },
        {
            path: 'drag-kanban',
            component: () => import('@/views/components-demo/dragKanban'),
            name: 'DragKanbanDemo',
            meta: { title: 'dragKanban' }
        },
        {
            path: 'drag-select',
            component: () => import('@/views/components-demo/dragSelect'),
            name: 'DragSelectDemo',
            meta: { title: 'dragSelect' }
        }
    ]
}

export default componentsRouter;
