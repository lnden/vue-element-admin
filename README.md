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

vue2.0 + elementui + vuex + vue-router + ES6/7 + axios + svg + mockjs

注：该项目需要配置到github page

1.打包发布修改 config/index.js 文件下,46-52 line details remarks

```
build:{
    assetsPublicPath: '/vue-element-admin/',
}
```

### 安装

#### 安装使用 vuex

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
#### 安装使用 vue-router

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
#### 安装使用 axios

```
npm install axios -S
```

#### 安装使用 scss
```
npm install node-sass -D
npm install sass-loader -D
```
1.修改配置文件 build\webpack.base.conf.js
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

#### 安装使用 ElementUI
该流程可以按照[ElemenUI](http://element-cn.eleme.io/#/zh-CN)来使用安装
```
npm install element-ui -S

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
```

#### 安装使用 normalize
```
npm install normalize.css --S
```
1.在main.js中i直接引入重置样式
```
import 'normalize.css'
```
#### 安装使用 mockjs
```
npm install mockjs -S
```
1.使用mockjs模拟请求数据

### 配置

&emsp;&emsp;配置一些全局的信息，比如styles、request、icons、一些开发规范等文档内容！

#### 全局 styles
1.src目录下新建style文件夹

内建public目录，存放响全局样式、过度动画和elementui重置信息等。

可内建对应页面scss文件进行样式抽离，如果UI改动不大可在当前页面添加

#### 全局 icons

1.在components文件内创建全局svg-icon组件

2.在src目录下创建icons文件存放icon图标且编写svg-sprite-loader检索.svg输出

3.安装webpack-loader
```
npm install svg-sprite-loader -D
```

3.修改配置文件 build\webpack.base.conf.js
```
rules: [
    {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [resolve('src/icons')],
        options: {
            symbolId: 'icon-[name]'
        }
    },
    {
        loader: 'url-loader',
        exclude: [resolve('src/icons')]  //重点
    }
]
```

#### 全局 nprogress
1.路由跳转全局添加进度条
```
npm install nprogress -S
```

#### 安装  xlsx

```js
cnpm install xlsx -S
```
xlsx依赖 file-saver -S  and  script-loader -D


### 目标
基础功能
- [x] 登录/登出
- [x] 错误
&emsp;&emsp;- [x] 404/401
&emsp;&emsp;- [x] 错误日志
- [x] Dashboard
- [x] 引导页
- [x] 图标
- [x] 组件
&emsp;&emsp;- [x] 富文本编辑器
&emsp;&emsp;- [x] Markdown
&emsp;&emsp;- [x] 头像上传
&emsp;&emsp;- [x] 数字滚动
&emsp;&emsp;- [x] 剪贴面板
&emsp;&emsp;- [x] 粘贴顶部
&emsp;&emsp;- [x] 返回顶部
&emsp;&emsp;- [x] 拖拽看板
&emsp;&emsp;- [x] 拖拽选择
&emsp;&emsp;- [x] 拖拽弹框
- [x] 表格
- [x] EXCEL
- [x] PDF
- [x] ZIP
- [x] 用户管理
&emsp;&emsp;- [x] 个人中心
&emsp;&emsp;- [x] 个人设置


扩展功能
- [x] 面包屑导航
- [x] Tags-View标签导航

辅助功能
- [x] 收缩侧边栏
- [x] 路由Title搜索
- [x] 全屏展示
- [x] 布局大小切换
- [x] 多语言切换

布局设置
- [x] 切换主题颜色
- [x] 开启 Tags-View
- [x] 固定 Header
- [x] 侧边栏 Logo

**注释**：

--save-dev  ==>  -D

--save      ==>  -S

install     ==>  i

SVG在线编辑    https://editor.method.ac/

项目中学习到的东西
