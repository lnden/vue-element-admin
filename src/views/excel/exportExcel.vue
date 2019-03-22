<template>
    <section class="app-container">
        <FileNameOption v-model="filename" />
        <BookTypeOption v-model="bookType" />
        <el-button :loading="downloadLoading" type="primary" @click="handleDownload" style="margin-left:20px;">{{ $t('excel.export') }} Excel</el-button>
    </section>
</template>

<script>
    /**
     * @author You name (*必填)
     * @date 2019/3/21
     * @desc 组件描述
     * @param {Object} [title]  - 参数说明
     */
    import FileNameOption from './components/FileNameOption'
    import BookTypeOption from './components/BookTypeOption'
    export default {
        name: "exportExcel",
        data() {
            return {
                filename:'',
                bookType:'',
                downloadLoading:false
            }
        },
        components: {
            FileNameOption,
            BookTypeOption
        },
        methods: {
            handleDownload(){
                console.log('导出~')
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
