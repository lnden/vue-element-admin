<template>
    <section class="components-container">
        <el-drag-select v-model="value" style="width:500px;" multiple placeholder="请选择">
            <el-option v-for="item in options" :label="item.lable" :value="item.value" :key="item.value"/>
        </el-drag-select>
        <div style="margin-top:30px;">
            <el-tag v-for="item of value" :key="item" style="margin-right:15px;">{{ item }}</el-tag>
        </div>
    </section>
</template>

<script>
    /**
     * @author lnden
     * @date 2019/2/19
     * @desc 组件描述
     * @param {Object} [title]  - 参数说明
     */
    import ElDragSelect from '@/components/DragSelect'

    export default {
        name: "dragSelect",
        data() {
            return {
                value: ['Apple','Banana','Orange'],
                options: [
                    { value:'Apple',lable:'Apple' },
                    { value:'Banana',lable:'Banana' },
                    { value:'Orange',lable:'Orange' },
                    { value:'Pear',lable:'Pear' },
                    { value:'Strawberry',lable:'Strawberry' }
                ]
            }
        },
        components:{
            ElDragSelect
        }
    }
</script>

