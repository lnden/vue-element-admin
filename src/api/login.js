import request from '@/utils/request'

export function login(username, password) {
    const data = { username, password }
    return request({
        url: '/login/login',
        method: 'post',
        data
    })
}

export function getInfo(token) {
    return request({
        url: '/login/info',
        method: 'post',
        data: token
    })
}

export function logout(token) {
    return request({
        url: '/login/logout',
        method: 'post',
        params: { token }
    })
}
