<template>
    <section class="icons-container">
        <p class="warn-content">
            <a href="https://www.iconfont.cn" target="_blank">Add and use</a>
        </p>
        <el-tabs type="border-card">
            <el-tab-pane label="Icons">
                <div class="icons-wrapper">
                    <el-tooltip placement="top" v-for="item of iconsMap" :key="item">
                        <div slot="content">
                            {{ generateIconCode(item) }}
                        </div>
                        <div class="icon-item" @click="handleClipboard(generateIconCode(item),$event)">
                            <svg-icon :icon-class="item" class-name="disabled" />
                            <span>{{ item }}</span>
                        </div>
                    </el-tooltip>
                </div>
            </el-tab-pane>

            <el-tab-pane label="Element-UI Icons">
                <div class="icons-wrapper">
                    <el-tooltip placement="top" v-for="item of elementIcons" :key="item">
                        <div slot="content">
                            {{ generateElementIconCode(item) }}
                        </div>
                        <div class="icon-item" @click="handleClipboard(generateElementIconCode(item),$event)">
                            <i :class="'el-icon-' + item" />
                            <span>{{ item }}</span>
                        </div>
                    </el-tooltip>
                </div>
            </el-tab-pane>
        </el-tabs>

    </section>
</template>

<script>
    import icons from './requireIcons'
    import clipboard from '@/utils/clipboard'
    import elementIcons from './element-icon.json'

    export default {
        name: 'Icons',
        data() {
            return {
                iconsMap: icons,
                elementIcons: elementIcons
            }
        },
        methods: {
            generateIconCode(symbol) {
                return `<svg-icon icon-class="${symbol}" />`
            },
            generateElementIconCode(symbol) {
                return `<i class="el-icon-${symbol}" />`
            },
            handleClipboard(text, event) {
                clipboard(text, event)
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .icons-container {
        margin: 10px 20px 0;
        overflow: hidden;
        .icons-wrapper {
            margin: 0 auto;
            overflow: auto;
        }
        .icon-item {
            margin: 20px;
            height: 110px;
            text-align: center;
            width: 110px;
            float: left;
            font-size: 30px;
            color: #24292e;
            cursor: pointer;
            span {
                display: block;
                font-size: 14px;
                margin-top: 10px;
            }
        }
        /* 该属性css新增需配合a不添加href */
        .disabled{
            pointer-events: none;
        }
    }
</style>
