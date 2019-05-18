<template>
    <section>
        <h3>我是【儿子】组件1111111</h3>
        <section>
            foo:{{foo}}
        </section>
        <hr>
        <main>
            <children2 v-bind="$attrs"/>
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
    import children2 from './children2.vue'
    export default {
        props: {
            foo: String
        },
        components: {
            children2
        },
        mounted() {
            console.log('我是儿子组件')
            console.log(this.$attrs)
        }
    }
</script>

<style rel="stylesheet" lang="scss">

</style>

