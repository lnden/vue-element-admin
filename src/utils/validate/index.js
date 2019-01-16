/**
 * validate validateuser
 * @param validateuser
 * @returns {boolean}
 * @description 验证规则：大/小字母+7位数字
 */
export function validateUser(validateuser) {
    const re = /^[A-Za-z]\d{7}$/;
    return re.test(validateuser)
}