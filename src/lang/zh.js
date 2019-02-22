export default {
    route: {
        dashboard: '首页',
        icons: '图标',
        components: '组件',
        backToTop: '返回顶部',
        tinymce: '富文本编辑器',
        markdown: 'Markdown',
        clipboard: '剪贴板',
        sticky: '粘贴顶部',
        error: '错误页面',
        guide: '引导页',
        log: '错误日志',
        401: '401页面',
        404: '404页面',
        systemset: '系统设置',
        user: '个人中心',
        userManage: '用户管理',
        dragKanban: '拖拽看板',
        dragSelect: '拖拽选择',
        dragDialog: '拖拽弹框',
        mixin:'Mixin',
        PDF:'PDF',
        avatarUpload:'Avatar Upload',
        countTo:'Count To'

    },
    navbar: {
        screenfull: '全屏',
        size: '布局大小',
        lang: '语言切换',
        theme: '更换主题',
        dashboard: '首页',
        github: '项目地址',
        user: '个人中心',
        logout: '退出登录'
    },
    login: {
        title: '系统登录',
        logIn: '登录',
        username: '账号',
        password: '密码'
    },
    components: {
        backToTopTips1: '页面滚动到指定位置会在右下角出现返回顶部按钮',
        backToTopTips2: '可自定义按钮的样式、show/hide、出现的高度、返回的位置 如需文字提示，可在外部使用Element的el-tooltip元素',
        prompt: '回到顶部',
        stickyTips: '当页面滚动到预设的位置会吸附在顶部',
        documentation: '文档',
        tinymceTips: '富文本是管理后台一个核心的功能，但同时又是一个有很多坑的地方。在选择富文本的过程中我也走了不少的弯路，市面上常见的富文本都基本用过了，最终权衡了一下选择了Tinymce。更详细的富文本比较和介绍见',
        imageUploadTips: '由于我在使用时它只有vue@1版本，而且和mockjs不兼容，所以自己改造了一下，如果大家要使用的话，优先还是使用官方版本。'
    },
    guide: {
        description: '引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于',
        button: '打开引导'
    },
    excel: {
        export: '导出',
        selectedExport: '导出已选择项',
        placeholder: '请输入文件名(默认excel-list)'
    },
    zip: {
        export: '导出',
        placeholder: '请输入文件名(默认file)'
    },
    pdf: {
        tipsone: '这里使用  window.print() 来实现下载pdf的功能',
        clickbtn: '点击下载PDF',
        tipstwo: '这里使用  jspdf and html2canvas 来实现下载pdf的功能',
        downloadPdf: '页面转换PDF'
    },
    clipboard: {
        tipsone: '使用directly剪切板功能',
        tipstwo: '使用v-directly剪切板功能'
    },
    public: {
        delete: '删除',
        cancel: '取 消',
        confirm: '确 定'
    }
}
