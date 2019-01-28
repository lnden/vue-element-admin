<template>
    <section class="container">
        <Sidebar class="sidebar-container" />
        <section class="main-container">
            <Headerbar />
            <ContentMain />
        </section>
    </section>
</template>

<script>
    import { Headerbar,Sidebar,ContentMain} from './components'
    export default {
        name:"layout",
        data(){
            return {
                name:'布局'
            }
        },
        components:{
            Headerbar,
            Sidebar,
            ContentMain
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "~@/styles/public/mixin.scss";
    .container {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;
        &.mobile.openSidebar{
            position: fixed;
            top: 0;
        }
    }
</style>
