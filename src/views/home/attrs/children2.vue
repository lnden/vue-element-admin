<template>
    <section>
        <h3>我是【孙子】组件2222222</h3>
        <hr>
        <main>
            <children3 v-bind="$attrs"/>
        </main>
    </section>
</template>

<script>
    /**
     * @author Lnden
     * @date 2019/5/18
     * @desc 组件描述
     * @param 组件引用位置
     */
    import children3 from './children3.vue'
    export default {
        components: {
            children3
        },
        mounted() {
            console.log('我是孙子组件')
            console.log(this.$attrs)
        }
    }
</script>

<style rel="stylesheet" lang="scss">

</style>

