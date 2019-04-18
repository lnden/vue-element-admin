import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const List = []
const count = 100

const baseContent = '<p>我是测试数据我是测试数据</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

for (let i = 0; i < count; i++) {
    List.push(Mock.mock({
        id: '@increment',
        timestamp: +Mock.Random.date('T'),
        author: '@first',
        reviewer: '@first',
        title: '@title(5, 10)',
        content_short: '我是测试数据',
        content: baseContent,
        forecast: '@float(0, 100, 2, 2)',
        importance: '@integer(1, 3)',
        'type|1': ['CN', 'US', 'JP', 'EU'],
        'status|1': ['published', 'draft', 'deleted'],
        display_time: '@datetime',
        comment_disabled: true,
        pageviews: '@integer(300, 5000)',
        image_uri,
        platforms: ['a-platform']
    }))
}

export default {
    getList: config => {
        //  config 对象有三个参数
        //  1.body: '为post接收参数'
        //  2.type: 'GET'
        //  3.url: '/article/list?sort=&page=&limit=&title="'
        const { importance, type, title, page = 1, limit = 20, sort } = param2Obj(config.url)

        let mockList = List.filter(item => {
            if (importance && item.importance !== +importance) return false
            if (type && item.type !== type) return false
            if (title && item.title.indexOf(title) < 0) return false
            return true
        })

        // 如果参数 sort 为 '-id' 则数据倒序展示100-81
        if (sort === '-id') {
            mockList = mockList.reverse()
        }

        //  容错处理
        //      1.判断当前展示的值是否 小于 < (limit[20] * page[1])，  20true  80false
        //      2.判断当前展示的值是否 大于等于 >= (limit[2] * (page[1]-1)), true 0
        const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

        return {
            total: mockList.length,
            items: pageList
        }
    },
    getPv: () => ({
        pvData: [{ key: 'PC', pv: 1024 }, { key: 'mobile', pv: 1024 }, { key: 'ios', pv: 1024 }, { key: 'android', pv: 1024 }]
    }),
    createArticle: () => ({
        data: 'success'
    }),
    updateArticle: () => ({
        data: 'success'
    })
}
