<template>
    <section :class="classObj" class="container">
        <Sidebar class="sidebar-container" />
        <section class="main-container">
            <Headerbar />
            <tags-view/>
            <ContentMain />
        </section>
    </section>
</template>

<script>
    import { Sidebar,Headerbar,TagsView,ContentMain} from './components'
    export default {
        name:"layout",
        data(){
            return {
                name:'布局'
            }
        },
        components:{
            Sidebar,
            Headerbar,
            TagsView,
            ContentMain
        },
        computed: {
            sidebar() {
                return this.$store.state.app.sidebar
            },
            classObj() {
                return {
                    hideSidebar: !this.sidebar.opened,
                    openSidebar: this.sidebar.opened,
                    withoutAnimation: this.sidebar.withoutAnimation,
                    mobile: this.device === 'mobile'
                }
            }
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
