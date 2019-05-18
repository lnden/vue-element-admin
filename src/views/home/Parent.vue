<template>
    <section class="app-container">
        <h1>Parent方式传值</h1>
        <hr>
        <main>
            <Children1 ref="comA"/>
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
    import Children1 from './Parent/children1.vue'
    export default {
        components: {
            Children1
        },
        mounted() {
            const comA = this.$refs.comA
            console.log(comA.msg)
            comA.sayHello()
        }
    }
</script>

<style rel="stylesheet" lang="scss">

</style>

