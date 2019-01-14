import {
    COUNT
} from './mutation-types.js'

const mutations = {
    [COUNT](state,data){
        state.count = data
    }
}

export default mutations;