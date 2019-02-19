<template>
    <section class="components-container">
        <section class="board">
            <Kanban :key="1" :list="list1" :options="options" class="kanban todo" header-text="Todo"></Kanban>
            <Kanban :key="2" :list="list2" :options="options" class="kanban working" header-text="Working"></Kanban>
            <Kanban :key="3" :list="list3" :options="options" class="kanban done" header-text="Done"></Kanban>
        </section>
        <div class="content board">
            <ul>
                <h3>list1</h3>
                <li v-for="ele in list1">{{ele.name}}-{{ele.id}}</li>
            </ul>

            <ul>
                <h3>list2</h3>
                <li v-for="ele in list2">{{ele.name}}-{{ele.id}}</li>
            </ul>

            <ul>
                <h3>list3</h3>
                <li v-for="ele in list3">{{ele.name}}-{{ele.id}}</li>
            </ul>
        </div>
    </section>
</template>

<script>
   import Kanban from '@/components/Kanban'

    export default {
        name: "dragKanban",
        components:{
            Kanban
        },
        data(){
            return {
                options:{
                    sort:true,         //是否可以组内拖拽排序
                    group: 'mission',   //是否可以跨组拖拽
                    // delay:10,
                    // animation:10,
                },
                list1:[
                    {name:'Mission',id:1},
                    {name:'Mission',id:2},
                    {name:'Mission',id:3},
                    {name:'Mission',id:4}
                ],
                list2:[
                    {name:'Mission',id:5},
                    {name:'Mission',id:6},
                    {name:'Mission',id:7}
                ],
                list3:[
                    {name:'Mission',id:8},
                    {name:'Mission',id:9},
                    {name:'Mission',id:10}
                ]
            }
        },
        methods:{
            handleClick(){
                // 可以实时获取当前数组的值
                console.log(this.list1)
                console.log(this.list2)
                console.log(this.list3)
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    // flex布局分三栏
    .board {
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        align-items: flex-start;
    }
</style>

<style rel="stylesheet/scss" lang="scss">
    // 三栏头部颜色区分，scoped子组件无法继承
    .board{
        .kanban {
            &.todo {
                .board-column-header {
                    background: #4A9FF9;
                }
            }
            &.working {
                .board-column-header {
                    background: #f9944a;
                }
            }
            &.done {
                .board-column-header {
                    background: #2ac06d;
                }
            }
        }
    }
</style>
