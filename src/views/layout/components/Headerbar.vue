<template>
    <section class="headerbar-container">
        <section class="header-item">
            <el-tooltip content="全屏" effect="dark" placement="bottom">
                <screen-full class="right-menu-item"/>
            </el-tooltip>

            <el-tooltip content="大小" effect="dark" placement="bottom">
                <size-select class="right-menu-item"/>
            </el-tooltip>

            <lang-select class="right-menu-item"/>

            <el-tooltip content="皮肤" effect="dark" placement="bottom">
                <theme-picker class="right-menu-item"/>
            </el-tooltip>
            
            <el-dropdown class="avatar-container right-menu-item" trigger="click">
                <div class="avatar-wrapper">
                    <img src="http://5b0988e595225.cdn.sohucs.com/images/20180809/1cd9fc6d6da740a18371340e77e3af11.jpeg" class="user-avatar">
                    <!-- <i class="el-icon-caret-bottom"/> -->
                </div>
                <el-dropdown-menu slot="dropdown">
                    <router-link to="/">
                        <el-dropdown-item>zhuye </el-dropdown-item>
                    </router-link>
                    <a target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">
                        <el-dropdown-item>Github</el-dropdown-item>
                    </a>
                    <el-dropdown-item divided>
                        <span style="display:block;" @click="logout">登出</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </section>
        
    </section>
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
                console.log('登出')
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
        border-bottom: 2px solid #f00;
        .header-item{
            float:right;
            .right-menu-item {
                display: inline-block;
                margin: 0 8px;
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