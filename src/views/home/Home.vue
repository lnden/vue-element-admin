<template>
    <section class="home-container">
        {{name}}
        <Loading />  
    </section>
</template>

<script>
    import Loading from '@/components/Loading'
    export default {
        name:'home',
        data(){
            return {
                name:'主页'
            }
        },
        components:{
            Loading
        }
    }
</script>

<style ref="stylesheet" lang="scss" scoped>
    .home-container{
        border:1px solid #f00;
    }
</style>