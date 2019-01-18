import { loginByUsername, logout } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
const user = {
    state:{
         token:getToken()
    },

    mutations:{
        SET_TOKEN: (state, token) => {
            state.token = token
        }
    },

    actions:{
        // 用户名登录
        LoginByUsername({ commit }, userInfo) {
            const username = userInfo.username.trim()
            return new Promise((resolve, reject) => {
                loginByUsername(username, userInfo.password).then(response => {
                    const data = response.data
                    commit('SET_TOKEN', data.token)
                    setToken(data.token)
                    resolve()
                }).catch(error => { 
                    reject(error)
                })
            })
        },
    }
}

export default user;