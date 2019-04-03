<template>
    <el-select ref="dragSelect" v-model="selectVal" v-bind="$attrs" class="drag-select" multiple v-on="$listeners">
        <slot />
    </el-select>
</template>

<script>
    /**
     * @desc    该组件使用sortablejs
     *          addredd：https://segmentfault.com/a/1190000008209715?utm_source=tag-newest
     * @param   options
     */
    import Sortable from 'sortablejs'
    export default {
        name: "index",
        props: {
            value: {
                type: Array,
                required: true
            }
        },
        computed: {
            selectVal: {
                get() {
                    return [...this.value]
                },
                set(val) {
                    this.$emit('input',[...val])
                }
            }
        },
        mounted(){
            this.setSort();
        },
        methods:{
            setSort(){
                const el = this.$refs.dragSelect.$el.querySelectorAll('.el-select__tags > span')[0];
                this.sortable = Sortable.create(el, {
                    ghostClass: 'sortable-ghost', // Class name for the drop placeholder,
                    setData: function(dataTransfer) {
                        dataTransfer.setData('Text', '')
                        // to avoid Firefox bug
                        // Detail see : https://github.com/RubaXa/Sortable/issues/1012
                    },
                    onEnd: evt => {
                        const targetRow = this.value.splice(evt.oldIndex, 1)[0]
                        this.value.splice(evt.newIndex, 0, targetRow)
                    }
                })
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
