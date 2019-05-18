<template>
    <section>
        <h3>我是重孙子组件</h3>
        <main>
            我是太爷爷传递过来的内容{{name}}
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
    export default {
        inject: ['name'],
        mounted() {
            console.log(this.name)
        }
    }
</script>

<style rel="stylesheet" lang="scss">

</style>

