import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import user from './modules/user'

export default new Vuex.Store ({
    modules:{
        user
    },
    state,
    getters,
    mutations,
    actions
})