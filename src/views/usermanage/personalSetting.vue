<template>
    <section class="personalSetting">
        <el-col :span="4">
            <el-menu
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item index="1">
                    <router-link to="/setting/personalsetting/basics">基本设置</router-link>
                </el-menu-item>
                <el-menu-item index="2">
                    <router-link to="/security">安全设置</router-link>
                </el-menu-item>
                <el-menu-item index="3">
                    <router-link to="/setting/binding">账号绑定</router-link>
                </el-menu-item>
                <el-menu-item index="4">
                    <router-link to="/setting/notification">消息通知</router-link>
                </el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="19">
            <section style="border:1px solid #f00;width:100%;height:500px;">
                <router-view name="user">asasa</router-view>
            </section>
        </el-col>
    </section>
</template>

<script>
    /**
     * @author You name (*必填)
     * @date 2019/4/3
     * @desc 组件描述
     * @param {Object} [title]  - 参数说明
     */

    export default {
        name: "personalSetting",
        methods:{
            handleOpen(){},
            handleClose(){}
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .personalSetting{
        border:1px solid #f00;
        width:100%;
        overflow: auto;
    }
</style>
