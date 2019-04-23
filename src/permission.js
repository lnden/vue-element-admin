import router from './router'
// import store from './store'
import { getToken } from '@/utils/auth'
import NProgress from 'nprogress'
// import { Message } from 'element-ui'
import 'nprogress/nprogress.css'
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/error']

router.beforeEach(async(to, from, next) => {
    // start progress bar
    NProgress.start()

    // set page title
    document.title = getPageTitle(to.meta.title)

    const hasToken = getToken()
    if (hasToken) {
        if (to.path === '/login') {
            // if is logged in, redirect to the home page
            next({ path: '/' })
            NProgress.done()
        } else {
            next()
            // const hasRoles = store.getters.roles && store.getters.roles.length > 0
            // if (hasRoles) {
            //
            // } else {
            //     try {
            //         const { roles } = await store.dispatch('user/getInfo')
            //         const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
            //         router.addRoutes(accessRoutes)
            //         next({ ...to, replace: true })
            //     } catch (error) {
            //         await store.dispatch('user/resetToken')
            //         Message.error(error || 'Has Error')
            //         next(`/login?redirect=${to.path}`)
            //         NProgress.done()
            //     }
            // }
        }
    } else {
        // has no token
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next(`/login?redirect=${to.path}`)
            NProgress.done()
        }
    }
})
router.afterEach(() => {
    NProgress.done()
})
