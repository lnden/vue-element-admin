[toc]

# vue-element-admin
* [简介](#简介)


<h3 id="简介">简介</h3>

&emsp;&emsp;该项目使用 vue cli 构建生成简单的目录结构

Vue2.0 + ElementUi + Vuex + vue-router + ES6/7 + axios + svg + mockjs + plop + Eslint

注：该项目需要配置到github page

1.打包发布修改 config/index.js 文件下

```
build:{
    assetsPublicPath: '/vue-element-admin/',
}
```
### 目标
基础功能
- [x] 登录/登出
- [x] 错误
- [x] Dashboard
- [x] 引导页
- [x] 图标
- [x] 组件
- [x] 组件-富文本编辑器
- [x] 组件-Markdown
- [x] 组件-头像上传
- [x] 组件-数字滚动
- [x] 组件-剪贴面板
- [x] 组件-粘贴顶部
- [x] 组件-返回顶部
- [x] 组件-拖拽看板
- [x] 组件-拖拽选择
- [x] 组件-拖拽弹框
- [x] 表格
- [x] EXCEL
- [x] PDF
- [x] ZIP
- [x] 用户管理

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

### 安装
<a href="#安装使用 vue-router">安装使用</a>
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

#### 安装  xlsx

```js
cnpm install xlsx -S
```
xlsx依赖 file-saver -S  and  script-loader -D

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

**注释**：

--save-dev  ==>  -D

--save      ==>  -S

install     ==>  i

SVG在线编辑    https://editor.method.ac/


## Eslint

如果是现在新建一个项目，通过vue-cli的问答就可以轻松初始化ESLint的配置。

这里说一下怎样在老项目里新添加ESLint。

1、首先全局安装Eslint
```
cnpm install -g eslint
```

2、其次需要初始化一个eslint配置文件.eslintrc.js
```
eslint --init
```
3、然后我们来看看配置文件的内容
```
module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: 'eslint:recommended',
    plugins: [
        'html'
    ],
    'settings': {
        'import/resolver': {
            'webpack': {
                'config': 'build/webpack.base.conf.js'
            }
        }
    },
    'rules': {
        'indent': [2, 4, {
            'SwitchCase': 1
        }]
    }
}
```

4、配置webpack.base.conf.js文件
```
const createLintingRule = () => ({
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    include: [resolve('src'), resolve('test')],
    options: {
        formatter: require('eslint-friendly-formatter'),
        emitWarning: !config.dev.showEslintErrorsInOverlay
    }
})

// 当前目录 module => rules 规则下添加如下配置
   ...(config.dev.useEslint ? [createLintingRule()] : []),
```

5、安装下载相关依赖包package.json
```
cnpm install eslint -D
cnpm install babel-eslint -D
cnpm install eslint-friendly-formatter -D
cnpm install eslint-loader -D
cnpm install eslint-plugin-html -D
```
6、设置"script"执行文件

检测项目中不符合定义的Eslint要求
```
 "lint": "eslint --ext .js,.vue src"
```
检测并且修改项目中不符合定义的Eslint要求
```
 "lint": "eslint --fix --ext .js,.vue src"

 npm run lint -- --fix
```
7、最后一步非常重要设置config/index.js控制台显示报错信息
```
useEslint: true
```
至此Eslint已经安装完毕


