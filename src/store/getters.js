const getters = {
    sidebar: state => state.app.sidebar,
    getCount: state => state.count,
    size: state => state.size,
    language: state => state.language,
    permission_routers: state => state.permission.routes,
    roles: state => state.user.roles
}

export default getters
