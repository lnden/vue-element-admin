import Cookies from 'js-cookie'
const state = {
    count: 0,
    size: Cookies.get('size') || 'medium',
    language: Cookies.get('language') || 'en'
}

export default state
