<template>
    <section class="board-column">
        <div class="board-column-header">
            {{headerText}}
        </div>
        <draggable
            class="board-column-content"
            :list="list"
            :options="options">
            <div v-for="element in list" :key="element.id" class="board-item">
                {{element.name}} - {{element.id}}
            </div>
        </draggable>
    </section>
</template>

<script>
    import draggable from 'vuedraggable'

    export default {
        name: "index",
        props: {
            headerText: {
                type: String,
                default: 'header'
            },
            options: {
                type: Object,
                default(){
                    return {}
                }
            },
            list: {
                type: Array,
                default:function(){
                    return []
                }
            }
        },
        components: {
            draggable
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
