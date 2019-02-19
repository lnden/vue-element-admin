<template>
    <section>
        <Kanban :key="1" :list="list1" :options="options" class="kanban todo" header-text="Todo"></Kanban>
        <Kanban :key="2" :list="list2" :options="options" class="kanban working" header-text="Working"></Kanban>
        <Kanban :key="3" :list="list3" :options="options" class="kanban done" header-text="Done"></Kanban>
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
                    sort:true,
                    animation:10
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
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
