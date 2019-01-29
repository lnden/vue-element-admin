<template>
    <header class="headerbar-container al-headerInner">
        <section class="header-item">
            <el-tooltip :content="$t('navbar.screenfull')" effect="dark" placement="bottom">
                <screen-full class="right-menu-item"/>
            </el-tooltip>

            <el-tooltip :content="$t('navbar.size')" effect="dark" placement="bottom">
                <size-select class="right-menu-item"/>
            </el-tooltip>

            <el-tooltip :content="$t('navbar.lang')" effect="dark" placement="bottom">
                 <lang-select class="right-menu-item"/>
            </el-tooltip>


            <el-tooltip :content="$t('navbar.theme')" effect="dark" placement="bottom">
                <theme-picker class="right-menu-item"/>
            </el-tooltip>

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
                    <a target="_blank" href="https://github.com/lnden/vue-element-admin/">
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
    import ScreenFull from '@/components/ScreenFull'
    import SizeSelect from '@/components/SizeSelect'
    import LangSelect from '@/components/LangSelect'
    import ThemePicker from '@/components/ThemePicker'
    export default {
        name:'headerbar',
        methods:{
            logout(){
                this.$store.dispatch('FedLogOut').then(() => {
                    location.reload()
                })
            }
        },
        components:{
            ScreenFull,
            SizeSelect,
            LangSelect,
            ThemePicker
        }
    }
</script>

<style ref="stylesheet" lang="scss" scoped>
    .headerbar-container{
        width:100%;
        height:60px;
        line-height: 60px;
        border-bottom: 2px solid #E9F1F3;
        .header-item{
            float:right;
            margin-right: 10px;
            .right-menu-item {
                display: inline-block;
                margin: 0 8px;
                height: 60px;
                line-height: 60px;
            }
            .avatar-container{
                height:60px;
                .avatar-wrapper{
                    // margin-right: 30px;
                    position: relative;
                    .user-avatar {
                        cursor: pointer;
                        width: 40px;
                        height: 40px;
                        vertical-align: middle;
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
