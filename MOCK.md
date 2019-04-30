### mockjs的使用方式

&emsp;&emsp;首先Mockjs这个东西我在这里就不展开的讲解了，如果你稍微了解一点mock假数据就知道这个具体是干什么用的，这里我们只是讨论使用的方式。

#### 安装 mockjs

```
npm install mockjs -S
```

#### 直接引入使用

- 目录结构
```
├─src
│ ├─mock
│ │ ├─index.js
│ │ ├─login.js
│ │ ├─article.js
│ ├─main.js
```

- 创建mock配置文件
```
// mock/index.js
import Mock from 'mockjs'
import loginApi from './login'
import articleApi from './article'

// Mock.mock(url,methods,data)
Mock.mock(/\/user\/getLogin/,'get',loginApi.getUserInfo)
export default Mock
```

- 创造mock假数据
```
// mock/login.js
import Mock from 'mockjs'
const result = []
for (let i = 0; i < 10; i++) {
    result.push(Mock.mock({
        id: '@increment',
        name: '@first',
        num: '@integer(1, 1000)',
        time: '@datetime',
        title: '@title(2, 4)',
        'state|1': ['true', 'false'],
        image_uri,
        parentAlgoName: '@integer(1, 3)',
        childAlgoName: '@integer(1, 2)',
        userName: 'superadmin',
        createTime: '@datetime',
        'handle|1': ['登录', '修改结果', '添加轮播图']
    }))
}

export default {
    getUserInfo: () => ({
        data: {
            pageIndex: 1,
            total: result.length,
            result: result
        }
    })
}
```

- 直接引入vue
```
// src/main.js
import './mock'
```
#### 启用 Mock Server
