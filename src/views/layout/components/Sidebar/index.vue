<template>
    <div :class="{'has-logo':showLogo}">
        <logo v-if="showLogo" :collapse="isCollapse" />
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-menu
                :show-timeout="200"
                :default-active="$route.path"
                :collapse="isCollapse"
                mode="vertical"
                background-color="#304156"
                text-color="#bfcbd9"
                active-text-color="#409EFF"
                :unique-opened="true"
            >
            <sidebar-item v-for="route in permission_routers" :key="route.path" :item="route" :base-path="route.path"/>
        </el-menu>
    </el-scrollbar>
    </div>


</template>

<script>
    import { mapGetters } from 'vuex'
    import SidebarItem from './SidebarItem'
    import Logo from './Logo'
    export default {
        name:'sidebar',
        components:{
            SidebarItem,
            Logo
        },
        computed: {
            ...mapGetters([
                'permission_routers',
                'sidebar'
            ]),
            showLogo() {
                return this.$store.state.settings.sidebarLogo
            },
            isCollapse() {
                return !this.sidebar.opened
            }
        }
    }
</script>
