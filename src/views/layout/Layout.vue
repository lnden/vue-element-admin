<template>
    <section class="container">
        <Headerbar />
        <section>
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
     // 侧边栏 Sidebar container
  .sidebar-container {
    transition: width 0.28s;
    width: $sideBarWidth !important;
    height: 100%;
    position: fixed;
    font-size: 0px;
    top: 100px;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;

    //reset element-ui css
    .horizontal-collapse-transition {
      transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
    }

    .scrollbar-wrapper {
      overflow-x: hidden !important;

      .el-scrollbar__view {
        height: 100%;
      }
    }

    .el-scrollbar__bar.is-vertical {
      right: 0px;
    }

    .is-horizontal {
      display: none;
    }

    a {
      display: inline-block;
      width: 100%;
      overflow: hidden;
    }

    .svg-icon {
      margin-right: 16px;
    }

    .el-menu {
      border: none;
      height: 100%;
      width: 100% !important;
    }

    .is-active>.el-submenu__title {
      color: #f4f4f5 !important;
    }
  }
    
</style>