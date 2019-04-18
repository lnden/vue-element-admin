
import { validateUser } from './index'

export const checkUsername = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('请输入用户名'))
    } else if (!validateUser(value) && value != 'admin') {
        return callback(new Error('请输入大写字母+7位数字'))
    } else {
        callback()
    }
}

export const checkPassword = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('请输入密码'))
    } else {
        callback()
    }
}
