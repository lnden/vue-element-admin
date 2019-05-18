<template>
    <section>
        <h3>我是儿子组件</h3>
        <main>
            我是儿子组件，我要展示自己的内容
            <p style="color:#C03639">{{msg}}</p>
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
        data() {
            return {
                msg: '这是最后一种传值方式'
            }
        },
        methods: {
            sayHello() {
                this.msg = '被修改了~~~'
            }
        }
    }
</script>

<style rel="stylesheet" lang="scss">

</style>

