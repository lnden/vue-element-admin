<template>
    <section class="app-container">
        <p><el-button type="primary">我是Element按钮样式</el-button></p>
        <p><el-button type="primary" @click="useBasic">Mock基础使用方式</el-button></p>
    </section>
</template>

<script>
import { getInfo } from '@/api/login'
export default {
    name: 'dashboard',
    methods: {
        useBasic() {
            getInfo({ token: 'admin' }).then(res => {
                console.log(res)
            })
        }
    }
}
</script>

<style ref="stylesheet" lang="scss" scoped>

</style>
