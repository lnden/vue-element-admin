<template>
    <section>
        <h3>我是孙子组件</h3>
        <main>
            我是爷爷传递过来的内容{{name}}
            <Children3 />
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
    import Children3 from './children3.vue'
    export default {
        inject: ['name'],
        components: {
            Children3
        },
        mounted() {
            console.log(this.name)
        }
    }
</script>

<style rel="stylesheet" lang="scss">

</style>

