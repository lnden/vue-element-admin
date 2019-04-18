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
import settings from './modules/settings'

export default new Vuex.Store({
    modules: {
        app,
        user,
        permission,
        tagsView,
        settings
    },
    state,
    getters,
    mutations,
    actions
})

// 可以使用第二种方式webpack进行检索导入
// https://webpack.js.org/guides/dependency-management/#requirecontext
// const modulesFiles = require.context('./modules', false, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//     // set './app.js' => 'app'
//     const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//     const value = modulesFiles(modulePath)
//     modules[moduleName] = value.default
//     return modules
// }, {})

// const store = new Vuex.Store({
//     modules,
//     state,
//     getters,
//     mutations,
//     actions
// })

// export default store;
