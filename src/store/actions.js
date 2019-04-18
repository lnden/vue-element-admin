const actions = {
    setCount({ commit }, data) {
        commit('COUNT', data)
    },
    setSize({ commit }, size) {
        commit('SET_SIZE', size)
    },
    setLanguage({ commit }, language) {
        commit('SET_LANGUAGE', language)
    }
}

export default actions
