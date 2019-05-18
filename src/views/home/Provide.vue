<template>
    <section class="app-container">
        <button @click="handleChange">改变按钮</button>名字： {{name}}
        <h1>我是Provider创建方式</h1>
        <hr>
        <main>
            <Child1 />
        </main>
    </section>
</template>

<script>
    /**
     * @author Lnden
     * @date 2019/5/18
     * @desc
     *
     *
     *  provide: {
     *      desc: '//这里要使用this对象thia.name就需要使用下面的方式',
     *      name: 'Lucy'
     *  }
     *
     *  provide() {
     *      return {
     *          name: this.name
     *      }
     *  }
     *
     */
    import Vue from 'vue'
    import Child1 from './provide/children1.vue'

    export default {
        provide() {
            this.theme = Vue.observable({
                name: 'lnden'
            })
            return {
                name: this.theme
            }
        },
        data() {
            return {
                name: 'Lucy'
            }
        },
        components: {
            Child1
        },
        methods: {
            handleChange() {
                this.theme.name = 'Tom'
            }
        }
    }
</script>

<style rel="stylesheet" lang="scss">

</style>

