<template>
    <section :class="classObj" class="container">
        <Sidebar class="sidebar-container" />
        <section class="main-container">
            <Headerbar />
            <tags-view/>
            <ContentMain />
            <right-panel v-if="showSettings">
                <settings />
            </right-panel>
        </section>
    </section>
</template>

<script>
    import RightPanel from '@/components/RightPanel'
    import { Sidebar,Headerbar,TagsView,ContentMain,Settings } from './components'
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
            ContentMain,
            RightPanel,
            Settings
        },
        computed: {
            sidebar() {
                return this.$store.state.app.sidebar
            },
            showSettings(){
                return this.$store.state.settings.showSettings
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
