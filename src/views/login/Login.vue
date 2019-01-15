<template>
    <section class="login">
        登录页面
        <div class="contents">
            内容部分
        </div>
    </section>
</template>

<script>
    export default {
        name:'login',
        data(){
            return {

            }
        }
    }
</script>

<style res="stylesheet/scss" lang="scss" scoped>
    .login{
        width:600px;
        height:600px;
        border:1px solid #f00;
        .contents{
            width:100px;
            height:100px;
            border:1px solid #f00;
        }
    }
</style>