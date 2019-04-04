export default {
    route: {
        dashboard: 'Dashboard',
        icons: 'Icons',
        components: 'Components',
        backToTop: 'BackTo Top',
        tinymce: 'Tinymce',
        markdown: 'Markdown',
        clipboard: 'Clipboard',
        sticky: 'Sticky Top',
        error: 'Error',
        guide: 'Guide',
        log: 'Error Log',
        401:'401 Page',
        404:'404 Page',
        systemset: 'System Setting',
        user: 'Personal Center',
        userManage: 'Personal Setting',
        dragKanban: 'Drag Kanban',
        dragSelect: 'Drag Select',
        dragDialog: 'Drag Dialog',
        mixin: 'Mixin',
        pdf: 'PDF',
        avatarUpload: 'Avatar Upload',
        countTo: 'Count To',
        excel: 'Excel',
        exportExcel: 'Export Excel',
        selectExcel: 'Export Selected',
        uploadExcel: 'Upload Excel',
        table: 'Table',
        dynamicTable: 'Dynamic Table',
        dragTable: 'Drag Table',
        inlineEditTable: 'Inline Edit',
        complexTable: 'Complex Table',
        zip:'Zip',
        exportZip:'Export Zip'
    },
    navbar: {
        screenfull: 'Screenfull',
        size: 'Globalsize',
        lang: 'Language',
        theme: 'Theme',
        dashboard: 'Dashboard',
        github: 'Github',
        user: 'Mycenter',
        logout: 'Logout'
    },
    login: {
        title: 'Login Form',
        logIn: 'Log in',
        username: 'Username',
        password: 'Password',
    },
    components: {
        backToTopTips1: 'When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner',
        backToTopTips2: 'You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally',
        prompt: 'tooltip',
        stickyTips: 'when the page is scrolled to the preset position will be sticky on the top.',
        documentation: 'Documentation',
        tinymceTips: 'Rich text editor is a core part of management system, but at the same time is a place with lots of problems. In the process of selecting rich texts, I also walked a lot of detours. The common rich text editors in the market are basically used, and the finally chose Tinymce. See documentation for more detailed rich text editor comparisons and introductions.',
        imageUploadTips: 'Since I was using only the vue@1 version, and it is not compatible with mockjs at the moment, I modified it myself, and if you are going to use it, it is better to use official version.'
    },
    table: {
        dynamicTips1: 'Fixed header, sorted by header order',
        dynamicTips2: 'Not fixed header, sorted by click order',
        dragTips1: 'The default order',
        dragTips2: 'The after dragging order',

        title: 'Title',
        importance: 'Imp',
        type: 'Type',
        search: 'Search',
        add: 'Add',
        export: 'Export',
        reviewer: 'reviewer',

        id: 'ID',
        date: 'Date',
        author: 'Author',
        readings: 'Readings',
        status: 'Status',
        actions: 'Actions',
        edit: 'Edit',
        publish: 'Publish',
        draft: 'Draft',
        delete: 'Delete',

        remark: 'Remark',
        cancel: 'Cancel',
        confirm: 'Confirm'
    },
    guide: {
        description: 'The guide page is useful for some people who entered the project for the first time. You can briefly introduce the features of the project. Demo is based on ',
        button: 'Show Guide'
    },
    excel: {
        export: 'Export',
        selectedExport: 'Export Selected Items',
        placeholder: 'Please enter the file name(default excel-list)'
    },
    zip: {
        export: 'Export',
        placeholder: 'Please enter the file name(default file)'
    },
    pdf: {
        tipsone: 'Here we use window.print() to implement the feature of downloading pdf.',
        clickbtn: 'Click to download PDF',
        tipstwo: 'Here we use jspdf and html2canvas to implement the feature of downloading pdf.',
        downloadPdf: 'Html to PDF'
    },
    clipboard: {
        tipsone: 'use clipboard directly',
        tipstwo: 'use clipboard by v-directive'
    },
    public: {
        delete: 'Delete',
        cancel: 'Cancel',
        confirm: 'Confirm'
    },
    tagsView: {
        refresh: 'Refresh',
        close: 'Close',
        closeOthers: 'Close Others',
        closeAll: 'Close All'
    }
}
