<template>
    <section class="board-column">
        <div class="board-column-header">
            {{headerText}}
        </div>
        <!--使用:options控制台出现warning-->
        <!--可以把options对象拆分普通值渲染如下替换:options="options"-->
        <!--sort=true-->
        <!--group ='mission'-->
        <!--animation=150-->
        <draggable
            class="board-column-content"
            :list="list"
            :options="options"
            :move="getdata"
            @update="datadragEnd">
            <!--<transition-group class="groupspan" :name="'flip-list'">-->
            <transition-group class="groupspan">
                <div v-for="element in list" :key="element.id" class="board-item">
                    {{element.name}} - {{element.id}}
                </div>
            </transition-group>
        </draggable>
    </section>
</template>

<script>
    import draggable from 'vuedraggable'

    export default {
        name: 'index',
        props: {
            headerText: {
                type: String,
                default: 'header'
            },
            options: {
                type: Object,
                default() {
                    return {}
                }
            },
            list: {
                type: Array,
                default: function() {
                    return []
                }
            }
        },
        components: {
            draggable
        },
        methods: {
            getdata(evt) {
                // console.log(evt.draggedContext.element.id)
            },
            datadragEnd(evt) {
                // console.log('拖动前的索引 :' + evt.oldIndex)
                // console.log('拖动后的索引 :' + evt.newIndex)
                // console.log(this.tags)
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
<style lang="scss">
    .board-column {
        min-width: 300px;
        min-height: 100px;
        height: auto;
        overflow: hidden;
        background: #f0f0f0;
        border-radius: 3px;
        /*border:1px solid #f00;*/

        .board-column-header {
            height: 50px;
            line-height: 50px;
            overflow: hidden;
            padding: 0 20px;
            text-align: center;
            background: #333;
            color: #fff;
            /*border:1px solid #f00;*/
        }

        .board-column-content {
            height: auto;
            overflow: hidden;
            border: 10px solid transparent;
            min-height: 60px;
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            align-items: center;
            /*border:1px solid #f00;*/

            .groupspan{
                display: block;
                width:100%;
            }
            .board-item {
                /*cursor: pointer;*/
                cursor: move;
                width: 100%;
                height: 64px;
                margin: 5px 0;
                background-color: #fff;
                text-align: left;
                line-height: 54px;
                padding: 5px 10px;
                box-sizing: border-box;
                box-shadow: 0px 1px 3px 0 rgba(0,0,0,0.2);
            }
        }
    }
</style>
