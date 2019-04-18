const getters = {
    sidebar: state => state.app.sidebar,
    getCount: state => state.count,
    size: state => state.size,
    language: state => state.language,
    permission_routers: state => state.permission.routers
}

export default getters
