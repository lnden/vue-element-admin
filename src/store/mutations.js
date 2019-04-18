import Cookies from 'js-cookie'

import {
    COUNT,
    SET_SIZE,
    SET_LANGUAGE
} from './mutation-types.js'

const mutations = {
    [COUNT](state, data) {
        state.count = data
    },
    [SET_SIZE](state, data) {
        state.size = data
        Cookies.set('size', data)
    },
    [SET_LANGUAGE](state, language) {
        state.language = language
        Cookies.set('language', language)
    }
}

export default mutations
