<template>
    <section class="app-container">
        <header>
            <FileNameOption v-model="filename" />
            <AutoWidthOption v-model="autoWidth" />
            <BookTypeOption v-model="bookType" />
            <el-button :loading="downloadLoading" type="primary" @click="handleDownload" style="float:right;margin:30px auto">{{ $t('excel.export') }} Excel</el-button>
        </header>

        <el-table
            v-loading="listLoading"
            element-loading-text="拼命加载中"
            :data="list"
            border
            fit
            highlight-current-row>
            <el-table-column label="Id" align="center"  width="95">
                <template slot-scope="scope">
                    {{ scope.$index+1 }}
                </template>
            </el-table-column>

            <el-table-column label="Title">
                <template slot-scope="scope">
                    {{ scope.row.title }}
                </template>
            </el-table-column>

            <el-table-column label="Author" width="110" align="center">
                <template slot-scope="scope">
                    <el-tag>{{ scope.row.author }}</el-tag>
                </template>
            </el-table-column>

            <el-table-column label="Readings" width="115" align="center">
                <template slot-scope="scope">
                    {{ scope.row.pageviews }}
                </template>
            </el-table-column>

            <el-table-column label="Date" align="center" width="220">
                <template slot-scope="scope">
                    <i class="el-icon-time"/>
                    <span>{{ scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
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
    import AutoWidthOption from './components/AutoWidthOption'
    import BookTypeOption from './components/BookTypeOption'
    import { fetchList } from '@/api/article'
    import { parseTime } from '@/utils'

    export default {
        name: "exportExcel",
        data() {
            return {
                filename: '',       //  导出文件名称
                autoWidth: true,    //  导出文件表格宽度
                bookType: 'xlsx',   //  导出文件类型
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
            AutoWidthOption,
            BookTypeOption
        },
        methods: {
            handleDownload(){
                this.downloadLoading = true
                import ('@/vendor/Export2Excel').then(excel=>{
                    const tHeader = ['Id','Title','Author','Readings','Date'];
                    const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time'];
                    const list = this.list;
                    const data = this.formatJson(filterVal, list);

                    excel.export_json_to_excel({
                        header: tHeader,
                        data,
                        filename: this.filename,
                        autoWidth: this.autoWidth,
                        bookType: this.bookType
                    });

                    this.downloadLoading = false
                })
            },
            formatJson(filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => {
                    if (j === 'timestamp') {
                        return parseTime(v[j])
                    } else {
                        return v[j]
                    }
                }))
            },
            fetchData(){
                this.listLoading = true;
                fetchList().then(response => {
                    setTimeout(()=>{
                        this.list = response.data.items;
                        this.listLoading = false
                        console.log('请求列表数据：',this.list)
                    },500)
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
