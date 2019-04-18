/**
 * validate validateuser
 * @param validateuser
 * @returns {boolean}
 * @description 验证规则：大/小字母+7位数字[A-Za-z]
 */
export function validateUser(validateuser) {
    const re = /^[A-Z]\d{7}$/
    return re.test(validateuser)
}
