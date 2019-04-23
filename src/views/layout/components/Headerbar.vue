<template>
    <header class="al-headerInner">
        <!--<hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/>-->
        <!--可以换一种方式-->
        <hamburger @toggleClick="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container" />

        <breadcrumb class="breadcrumb-container" />

        <section class="header-item">
            <header-search class="right-menu-item"/>
            <el-tooltip :content="$t('navbar.screenfull')" effect="dark" placement="bottom">
                <screen-full class="right-menu-item"/>
            </el-tooltip>

            <el-tooltip :content="$t('navbar.size')" effect="dark" placement="bottom">
                <size-select class="right-menu-item"/>
            </el-tooltip>

            <el-tooltip :content="$t('navbar.lang')" effect="dark" placement="bottom">
                 <lang-select class="right-menu-item"/>
            </el-tooltip>


            <!--<el-tooltip :content="$t('navbar.theme')" effect="dark" placement="bottom">-->
                <!--<theme-picker class="right-menu-item"/>-->
            <!--</el-tooltip>-->

            <el-dropdown class="avatar-container right-menu-item" trigger="click">
                <div class="avatar-wrapper">
                    <img src="http://5b0988e595225.cdn.sohucs.com/images/20180809/1cd9fc6d6da740a18371340e77e3af11.jpeg" class="user-avatar">
                    <!-- <i class="el-icon-caret-bottom"/> -->
                </div>
                <el-dropdown-menu slot="dropdown">
                    <router-link to="/">
                        <el-dropdown-item>{{$t('navbar.dashboard')}}</el-dropdown-item>
                    </router-link>
                    <router-link to="/setting/user">
                        <el-dropdown-item>{{$t('navbar.user')}}</el-dropdown-item>
                    </router-link>
                    <a target="_blank" href="https://dinglindong.github.io/vue-element-admin/">
                        <el-dropdown-item>{{$t('navbar.github')}}</el-dropdown-item>
                    </a>
                    <el-dropdown-item divided>
                        <span style="display:block;" @click="logout">{{$t('navbar.logout')}}</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </section>

    </header>
</template>

<script>
    import HeaderSearch from '@/components/HeaderSearch'
    import ScreenFull from '@/components/ScreenFull'
    // import ScreenFull from '@/components/ScreenFull/other'
    import SizeSelect from '@/components/SizeSelect'
    import LangSelect from '@/components/LangSelect'
    import ThemePicker from '@/components/ThemePicker'
    import Hamburger from '@/components/Hamburger'
    import Breadcrumb from '@/components/Breadcrumb'
    import { mapGetters } from 'vuex'
    export default {
        name: 'headerbar',
        computed: {
            ...mapGetters(['sidebar'])
        },
        components: {
            HeaderSearch,
            ScreenFull,
            SizeSelect,
            LangSelect,
            ThemePicker,
            Hamburger,
            Breadcrumb
        },
        methods: {
            // logout(){
            //     this.$store.dispatch('FedLogOut').then(() => {
            //         location.reload()
            //     })
            // },
            async logout() {
                // user/***  namespaced: true,
                await this.$store.dispatch('user/logout')
                this.$router.push(`/login?redirect=${this.$route.fullPath}`)
            },
            toggleSideBar() {
                this.$store.dispatch('toggleSideBar')
            }
        }
    }
</script>

<style ref="stylesheet" lang="scss" scoped>
    .al-headerInner{
        width:100%;
        height:50px;
        line-height: 50px;
        border-bottom: 1px solid #E9F1F3;
        background: #fff;
        box-shadow: 0 1px 4px rgba(0,21,41,.08);
        /*font-size: 0;*/
        user-select:none;
        .hamburger-container {
            float: left;
            padding: 0 15px;
            line-height: 46px;
            height: 100%;
            cursor: pointer;
            transition: background .3s;
            -webkit-tap-highlight-color:transparent;
            &:hover {
                background: rgba(0, 0, 0, .025)
            }
        }
        .header-item{
            float:right;
            margin-right: 10px;
            height:50px;
            .right-menu-item {
                display: inline-block;
                margin: 0 6px;
                height: 50px;
                line-height: 50px;
                font-size:20px;
                /*font-size: 0;*/
                vertical-align: text-bottom;
            }
            .avatar-container{
                .avatar-wrapper{
                    margin-right: 10px;
                    position: relative;
                    padding-top:5px;
                    height:50px;
                    .user-avatar {
                        cursor: pointer;
                        width: 40px;
                        height: 40px;
                        border-radius: 10px;
                    }
                    .el-icon-caret-bottom {
                        cursor: pointer;
                        position: absolute;
                        right: -20px;
                        top: 25px;
                        font-size: 12px;
                    }
                }

            }
        }
    }
</style>
