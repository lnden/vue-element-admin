const getters = {
    getCount:state => state.count,
    size: state => state.size,
    language: state => state.language,
    sidebar: state => state.app.sidebar,
    permission_routers: state => state.permission.routers
}

export default getters;