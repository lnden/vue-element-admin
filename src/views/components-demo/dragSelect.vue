<template>
    <section class="components-container">
        <el-drag-select v-model="value" style="width:500px;" multiple placeholder="请选择">
            <el-option v-for="item in options" :label="item.lable" :value="item.value" :key="item.value"/>
        </el-drag-select>
        <div style="margin-top:30px;">
            <el-tag v-for="item of value" :key="item" style="margin-right:15px;">{{ item }}</el-tag>
        </div>
        <section id="grid" class="row">
            <div id="gridDemo" class="col">
                <div class="grid-square">Item 1</div>
                <div class="grid-square">Item 2</div>
                <div class="grid-square">Item 3</div>
                <div class="grid-square">Item 4</div>
                <div class="grid-square">Item 5</div>
                <div class="grid-square">Item 6</div>
                <div class="grid-square">Item 7</div>
                <div class="grid-square">Item 8</div>
                <div class="grid-square">Item 9</div>
                <div class="grid-square">Item 10</div>
                <div class="grid-square">Item 11</div>
                <div class="grid-square">Item 12</div>
                <div class="grid-square">Item 13</div>
                <div class="grid-square">Item 14</div>
                <div class="grid-square">Item 15</div>
                <div class="grid-square">Item 16</div>
                <div class="grid-square">Item 17</div>
                <div class="grid-square">Item 18</div>
                <div class="grid-square">Item 19</div>
                <div class="grid-square">Item 20</div>
            </div>
        </section>
    </section>
</template>

<script>
    import ElDragSelect from '@/components/DragSelect'
    import Sortable from 'sortablejs'

    export default {
        name: 'dragSelect',
        data() {
            return {
                value: ['Apple', 'Banana', 'Orange'],
                options: [
                    { value: 'Apple', lable: 'Apple' },
                    { value: 'Banana', lable: 'Banana' },
                    { value: 'Orange', lable: 'Orange' },
                    { value: 'Pear', lable: 'Pear' },
                    { value: 'Strawberry', lable: 'Strawberry' }
                ]
            }
        },
        components: {
            ElDragSelect
        },
        mounted() {
            // Grid demo
            new Sortable(gridDemo, {
                animation: 150,
                ghostClass: 'blue-background-class'
            })
    }
    }
</script>

<style lang="scss" scoped>
    #grid {
        margin-top: 30px;
        background: #f4dec9;
        .grid-square {
            width: 100px;
            height: 100px;
            display: inline-block;
            background-color: #fff;
            border: solid 1px rgba(0,0,0,0.2);
            padding: 10px;
            margin: 12px;
        }
        .blue-background-class {
            background-color: #C8EBFB;
        }

    }

</style>
