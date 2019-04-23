<template>
    <section class="components-container">
        <el-button type="primary" @click="dialogTableVisible = true">open a Drag Dialog</el-button>
        <el-dialog v-el-drag-dialog :visible.sync="dialogTableVisible" title="Shipping address" @dragDialog="handleDrag">
            <el-select ref="select" v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"/>
            </el-select>
            <el-table :data="gridData">
                <el-table-column property="date" label="Date" width="150"/>
                <el-table-column property="name" label="Name" width="200"/>
                <el-table-column property="address" label="Address"/>
            </el-table>
        </el-dialog>
    </section>
</template>

<script>
    import elDragDialog from '@/directive/el-dragDialog' // base on element-ui

    export default {
        name: 'dragDialog',
        directives: { elDragDialog },
        data() {
            return {
                dialogTableVisible: false,
                value: '',
                options: [
                    { value: '选项1', label: '黄金糕' },
                    { value: '选项2', label: '双皮奶' },
                    { value: '选项3', label: '蚵仔煎' },
                    { value: '选项4', label: '龙须面' }
                ],
                gridData: [{
                    date: '2016-05-02',
                    name: 'John Smith',
                    address: 'No.1518,  Jinshajiang Road, Putuo District'
                }, {
                    date: '2016-05-04',
                    name: 'John Smith',
                    address: 'No.1518,  Jinshajiang Road, Putuo District'
                }, {
                    date: '2016-05-01',
                    name: 'John Smith',
                    address: 'No.1518,  Jinshajiang Road, Putuo District'
                }, {
                    date: '2016-05-03',
                    name: 'John Smith',
                    address: 'No.1518,  Jinshajiang Road, Putuo District'
                }]
            }
        },
        methods: {
            handleDrag() {
                // console.log('可以检测拖动事件');
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
