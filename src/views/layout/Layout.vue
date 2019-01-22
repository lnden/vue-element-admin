<template>
    <section class="container">
        <Headerbar />
        <section class="main-container">
            <Sidebar class="sidebar-container"/>
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

<style ref="stylesheet" lang="scss">
    $sideBarWidth: 180px;
    .main-container{
        transition: width 0.28s;
        width: $sideBarWidth;
        position: fixed;
        font-size: 0px;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 99;
        padding-top:62px;
        overflow: hidden;
        .sidebar-container {
            height:100%;
            //reset element-ui css
            .horizontal-collapse-transition {
                transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
            }
            // hidden scrollbar height:full
            .scrollbar-wrapper {
                overflow-x: hidden !important;
                .el-scrollbar__view {
                    height: 100%;
                }
            }
            // aside border
            .el-menu {
                border: none;
                height: 100%;
                width: 100% !important;
            }
            // title color
            .is-active>.el-submenu__title {
                color: #f4f4f5 !important;
            }
        }
    }  
</style>
