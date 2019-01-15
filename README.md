# vue-element-admin

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


### 简介

&emsp;&emsp;该项目使用 vue cli 构建生成简单的目录结构

vue2.0 + elementui + vuex + vue-router + ES6/7 + axios + svg 

[预览地址]('https://lnden.github.io/vue-element-admin')

注：该项目需要配置到github page

1.打包发布修改 config/index.js 文件下

```
build:{
  assetsPublicPath:'/vue-element-admin'
}
```

### 配置

#### 安装使用vuex

```
  npm install vuex -S
```
vuex我们按照官方推荐方式书写

1.首先在src目录创建store文件夹

2.在文件内创建 
-  actions   
-  getters
-  mutations
-  mutation-types
-  state
-  store(index) 

3.在main.js内引入store并且应用

```
import store from './store'
new Vue({
  el:'#app',
  store,
  components:{ App }
})
```
#### 安装使用vue-router

```
npm install vue-router -S
```
1.同样，在src目录下创建router文件夹

2.在文件内创建

- index.js

```
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const constantRouterMap = [
    { 
        path:'',
        component:()=>import('@/views/login/Login'),
        name:'home',
        meta:{
          title:'首页',
          icon:'nav-home',
          roles:['admin']
        }
    }
]

export default new Router({
    routes:constantRouterMap
})

```
3.在main.js内引入router并且应用

```
import store from './store'
import router from './router'
new Vue({
    el:'#app',
    store,
    router,
    components:{ App }
})
```
#### 安装使用axios

```
npm install axios -S
```

#### 安装使用scss
```
npm install node-sass -D  
npm install sass-loader -D 
```
1.修改配置文件 build\vue-loader.conf.js
```
rules: [
    {
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass']
    }
]
```
2.vue页面使用

```
<style rel="stylesheet/scss" lang="scss" scoped>
    @import ".."
    .login{
        .container{ }
    }
</style>
```

#### 安装使用ElementUI
该流程可以按照[ElemenUI](http://element-cn.eleme.io/#/zh-CN)来使用安装
```
npm install element-ui -S

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
```

#### 安装使用normalize
```
npm install normalize.css --S
```

**注释**：
--save-dev  ==>  -D
--save      ==>  -S
install     ==>  i