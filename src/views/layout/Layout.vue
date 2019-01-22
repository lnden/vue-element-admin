<template>
    <section class="container">
        <Headerbar />
        <section class="main-container">
            <Sidebar class="sidebar-container"/>
            <ContentMain class="content-container"/>
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
    $sideBarWidth: 200px;
    .container{
        .main-container{
            min-height: 100%;
            .sidebar-container{
                position: absolute;
                bottom: 0;
                top:0;
                margin-top:62px;

                height: 100%;
                width: $sideBarWidth;
                // reset element-ui css
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
            .content-container{
                position: absolute;
                left: $sideBarWidth;
                top: 62px;
                background:#6363c3;
                width: 100%;
                height: 100%;
            }
        }
     
    }
    // $sideBarWidth: 200px;
    // .main-container{
    //         position: absolute;
    //         left: 0;
    //         top: 62px;
    //         bottom: 0;
    //         overflow-y: scroll;
    //         transition: width 0.28s;
    //         font-size: 0px;
    //         z-index: 99;
    //         overflow: hidden;
    //     .sidebar-container {
    
    //         height:100%;
    //         width: $sideBarWidth;
    //         // reset element-ui css
    //         .horizontal-collapse-transition {
    //             transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
    //         }
    //         // hidden scrollbar height:full
    //         .scrollbar-wrapper {
    //             overflow-x: hidden !important;
    //             .el-scrollbar__view {
    //                 height: 100%;
    //             }
    //         }
    //         // aside border
    //         .el-menu {
    //             border: none;
    //             height: 100%;
    //             width: 100% !important;
    //         }
    //         // title color
    //         .is-active>.el-submenu__title {
    //             color: #f4f4f5 !important;
    //         }
    //     }
    //     .content-container{
    //        position: absolute;
    //     left: 300;
    //     top: 62px;
    //     bottom: 0;
    //     overflow-y: scroll;
    //     transition: width 0.28s;
    //     font-size: 0px;
    //     z-index: 99;
    //     overflow: hidden;
    //     }
    // }  
</style>
