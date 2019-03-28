import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import app from './modules/app'
import user from './modules/user'
import permission from './modules/permission'
import tagsView from './modules/tagsView'

export default new Vuex.Store ({
    modules:{
        app,
        user,
        permission,
        tagsView
    },
    state,
    getters,
    mutations,
    actions
})
