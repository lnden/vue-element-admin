<template>
    <section class="app-container">
        <FileNameOption v-model="filename" />
        <el-button :loading="downloadLoading" style="margin-bottom:20px" type="primary" @click="handleDownload">{{ $t('excel.selectedExport') }}</el-button>

        <el-table
            v-loading="listLoading"
            ref="multipleTable"
            :data="list"
            element-loading-text="拼命加载中"
            border
            fit
            highlight-current-row
            @selection-change="handleSelectionChange">
            <el-table-column type="selection" align="center"/>

            <el-table-column align="center" label="Id" width="95">
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

            <el-table-column align="center" label="PDate" width="220">
                <template slot-scope="scope">
                    <i class="el-icon-time"/>
                    <span>{{ scope.row.display_time }}</span>
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
    import { fetchList } from '@/api/article'

    export default {
        name: "selectExcel",
        data(){
            return {
                filename:'',
                downloadLoading:false,
                listLoading:true,
                list:null,
                multipleSelection:null
            }
        },
        components:{
            FileNameOption
        },
        methods:{
            handleSelectionChange(val){
                this.multipleSelection = val
            },
            handleDownload(){
                this.downloadLoading = true;
                if (this.multipleSelection.length) {
                    this.downloadLoading = true;
                    import('@/vendor/Export2Excel').then(excel => {
                        const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date'];
                        const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time'];
                        const list = this.multipleSelection;
                        const data = this.formatJson(filterVal, list);
                        excel.export_json_to_excel({
                            header: tHeader,
                            data,
                            filename: this.filename
                        });
                        this.$refs.multipleTable.clearSelection();
                        this.downloadLoading = false
                    })
                } else {
                    this.$message({
                        message: 'Please select at least one item',
                        type: 'warning'
                    })
                }
            },
            fetchData() {
                this.listLoading = true;
                fetchList().then(response => {
                    setTimeout(()=>{
                        this.list = response.data.items;
                        this.listLoading = false
                        console.log('请求列表数据：',this.list)
                    },500)
                })
            },
            formatJson(filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]))
            }
        },
        mounted(){
            this.fetchData();
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
