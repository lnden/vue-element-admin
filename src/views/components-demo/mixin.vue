<template>
    <section class="mixin-components-container">
        <el-row :gutter="20" style="margin-top:50px;">
            <!--<el-col :span="6">-->
                <!--<el-card class="box-card">-->
                    <!--<div slot="header" class="clearfix">-->
                        <!--<span>Material Design 的input</span>-->
                    <!--</div>-->
                    <!--<div style="height:100px;">-->
                        <!--<el-form :model="demo" :rules="demoRules">-->
                            <!--<el-form-item prop="title">-->
                                <!--<md-input v-model="demo.title" icon="search" name="title" placeholder="输入标题">标题</md-input>-->
                            <!--</el-form-item>-->
                        <!--</el-form>-->
                    <!--</div>-->
                <!--</el-card>-->
            <!--</el-col>-->

            <el-col :span="6">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>图片hover效果</span>
                    </div>
                    <div class="component-item">
                        <pan-thumb width="100px" height="100px" image="https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191">
                            vue-element-admin
                            <a href="www.baidu.com">测试</a>
                        </pan-thumb>
                    </div>
                </el-card>
            </el-col>

            <!--<el-col :span="6">-->
                <!--<el-card class="box-card">-->
                    <!--<div slot="header" class="clearfix">-->
                        <!--<span>水波纹 waves v-directive</span>-->
                    <!--</div>-->
                    <!--<div class="component-item">-->
                        <!--<el-button v-waves type="primary">水波纹效果</el-button>-->
                    <!--</div>-->
                <!--</el-card>-->
            <!--</el-col>-->

            <el-col :span="6">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>hover text</span>
                    </div>
                    <div class="component-item">
                        <mallki class-name="mallki-text" text="vue-element-admin"/>
                    </div>
                </el-card>
            </el-col>
        </el-row>

        <el-row :gutter="20" style="margin-top:50px;">
            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>Share</span>
                    </div>
                    <div class="component-item" style="height:420px;">
                        <dropdown-menu :items="articleList" style="margin:0 auto;" title="系列文章"/>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    /**
     * @author You name (*必填)
     * @date 2019/2/21
     * @desc 组件描述
     * @param {Object} [title]  - 参数说明
     */

    // import MdInput from '@/components/MDinput'
    import PanThumb from '@/components/PanThumb'
    // import waves from '@/directive/waves/index.js' // 水波纹指令
    import Mallki from '@/components/TextHoverEffect/Mallki'
    import DropdownMenu from '@/components/Share/dropdownMenu'
    export default {
        name: "mixin",
        data() {
            return {
                articleList: [
                    { title: 'Dashboard', href: 'https://juejin.im/post/59097cd7a22b9d20065fb61d2' },
                    { title: 'Github地址', href: 'https://juejin.im/post/591aa14f570c335006961acac' },
                    { title: 'Vuepress', href: 'https://juejin.im/post/593121aa0ce46330057f70d35' },
                    { title: '博客地址', href: 'https://juejin.im/post/595b4d776fb9a046bbe7dba56' },
                    { title: '展示页面', href: 'https://juejin.im/post/59bb864b51858257e7a427c09' }
                ]
            }
        },
        components: {
            // MdInput,
            PanThumb,
            Mallki,
            DropdownMenu
        },
        directives: {
            // waves
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .mixin-components-container {
        background-color: #f0f2f5;
        padding: 30px;
        min-height: calc(100vh - 84px);
    }
    .component-item{
        min-height: 100px;
    }
</style>
