<template>
    <section class="app-container">
        <header>
            <FileNameOption v-model="filename" />
            <BookTypeOption v-model="bookType" />
            <el-button :loading="downloadLoading" type="primary" @click="handleDownload" style="margin-left:20px;">{{ $t('excel.export') }} Excel</el-button>
        </header>

        <el-table
            v-loading="listLoading"
            element-loading-text="拼命加载中"
            :data="list"
            border
            fit
            highlight-current-row>
            <el-table-column prop="id" label="Id" align="center"  width="95">
                <template slot-scope="scope">
                    {{ scope.$index+1 }}
                </template>
            </el-table-column>

            <el-table-column props="title" label="Title">
                <template slot-scope="scope">
                    {{ scope.row.title }}
                </template>
            </el-table-column>

            <el-table-column prop="author" label="Author" width="110" align="center">
                <template slot-scope="scope">
                    <el-tag>{{ scope.row.author }}</el-tag>
                </template>
            </el-table-column>

            <el-table-column prop="readings" label="Readings" width="115" align="center">
                <template slot-scope="scope">
                    {{ scope.row.pageviews }}
                </template>
            </el-table-column>

            <el-table-column prop="date" label="Date" align="center" width="220">
                <template slot-scope="scope">
                    <i class="el-icon-time"/>
                    <span>{{ scope.row.timestamp }}</span>
                </template>
            </el-table-column>
        </el-table>
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
    import { parseTime } from '@/utils'

    export default {
        name: "exportExcel",
        data() {
            return {
                filename: '',       //  导出文件名称
                bookType: '',       //  导出文件类型
                downloadLoading: false,     //  导出等待loading
                listLoading:true,           //  table请求 loading效果
                requestParams:{
                    desc: '该对象为请求参数',
                    importance: '',
                    type: '',
                    title: '',
                    page: 1,
                    limit: 20,
                    sort: ''        // 正序默认值，倒序为'-id'
                },
                list:null           //  页面回显数据
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
                fetchList().then(response => {
                    setTimeout(()=>{
                        this.list = response.data.items;
                        this.listLoading = false
                        console.log('请求列表数据：',this.list)
                    },1000)
                })
            }
        },
        mounted() {
            this.fetchData();
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .app-container{
        header{
            margin-bottom: 30px;
        }
    }
</style>
