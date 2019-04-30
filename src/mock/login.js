
// function param2Obj(url) {
//     const search = url.split('?')[1]
//     if (!search) {
//         return {}
//     }
//     return JSON.parse(
//         '{"' +
//         decodeURIComponent(search)
//             .replace(/"/g, '\\"')
//             .replace(/&/g, '","')
//             .replace(/=/g, '":"') +
//         '"}'
//     )
// }

const users = {
    admin: {
        roles: ['admin'],
        token: 'admin',
        introduction: '我是超级管理员',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin'
    },
    editor: {
        roles: ['editor'],
        token: 'editor',
        introduction: '我是编辑',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Normal Editor'
    }
}

export default {
    login: config => {
        const { username } = JSON.parse(config.body)
        return users[username]
    },
    logout: () => 'success',
    getInfo: config => {
        const { token } = JSON.parse(config.body)
        const info = users[token]
        // mock error
        if (!info) {
            return {
                code: 50008,
                message: 'Login failed, unable to get user details.'
            }
        }

        return {
            code: 20000,
            data: info
        }
    }
}
