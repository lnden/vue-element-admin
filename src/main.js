// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import store from './store'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import Cookies from 'js-cookie'
import 'normalize.css' 
import '@/styles/public/index.scss'
import './icons'
import './permission'
import './mock'
import i18n from './lang'

Vue.use(ElementUI, {
    size: Cookies.get('size') || 'medium', 
    i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    i18n,
    components: { App },
    template: '<App/>'
})
