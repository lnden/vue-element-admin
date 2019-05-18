<template>
    <section class="app-container">
        <h1>{{name}}</h1>
        <hr>
        <main>
            <children1
                :foo="foo"
                :boo="boo"
                :coo="coo"
                :doo="doo"
                title="前端工匠"
            />
        </main>
    </section>
</template>

<script>
    // 使用$attrs and $listeners  进行组件传值  vue2.4.0新增API
    import children1 from './attrs/children1'
    export default {
        name: 'home',
        data() {
            return {
                name: '主页',
                foo: 'javascript',
                boo: 'html',
                coo: 'css',
                doo: 'vue'
            }
        },
        components: {
            children1
        }
    }
</script>

<style ref="stylesheet" lang="scss" scoped>

</style>
