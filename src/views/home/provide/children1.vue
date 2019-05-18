<template>
    <section>
        <h3>我是儿子组件</h3>
        <main>
            我是父亲传递过来的内容{{name}}
            <Children2 />
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
    import Children2 from './children2.vue'
    export default {
        inject: ['name'],
        components: {
            Children2
        },
        mounted() {
            console.log(this.name)
        }
    }
</script>

<style rel="stylesheet" lang="scss">

</style>

