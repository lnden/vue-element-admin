import Cookies from 'js-cookie'

const app = {
    state: {
        sidebar: {
            opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus'):true,
            withoutAnimation:false
        }
    },

    mutations: {

    },

    actions: {

    }
}

export default app;