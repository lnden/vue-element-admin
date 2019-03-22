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
    import { fetchList } from '@/api/article'


    export default {
        name: "exportExcel",
        data() {
            return {
                filename: '',
                bookType: '',
                downloadLoading: false,
                requestParams:{
                    importance: '',
                    type: '',
                    title: '',
                    page: 1,
                    limit: 20,
                    sort: ''   // 正序默认值，倒序为'-id'
                }
            }
        },
        components: {
            FileNameOption,
            BookTypeOption
        },
        methods: {
            handleDownload(){
                console.log('导出~')
            },
            fetchData(){
                this.listLoading = true;
                fetchList({page:2}).then(response => {
                    this.list = response.data.items;
                    console.log(response,11)
                    this.listLoading = false
                })
            }
        },
        mounted() {
            this.fetchData();
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
