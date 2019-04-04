<template>
    <div ref="rightPanel" :class="{show:show}" class="rightPanel-container">
        <div class="rightPanel-background" />
        <div class="rightPanel">
            <div class="handle-button" :style="{'top':buttonTop+'px','background-color':theme}" @click="show=!show">
                <i :class="show?'el-icon-close':'el-icon-setting'" />
            </div>
            <div class="rightPanel-items">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
    /**
     * @desc 主屏左侧居中设置按钮
     * @param  参数
     *      clickNotClose 点击关闭，默认为 false
     *      buttonTop 设置按钮为屏幕的顶部距离多少默认为250
     *
     */
    import { addClass, removeClass } from '@/utils'

    export default {
        name: 'RightPanel',
        props: {
            clickNotClose: {
                default: false,
                type: Boolean
            },
            buttonTop: {
                default: 250,
                type: Number
            }
        },
        data() {
            return {
                show: false
            }
        },
        computed: {
            theme() {
                return this.$store.state.settings.theme
            }
        },
        watch: {
            show(value) {
                if (value && !this.clickNotClose) {
                    this.addEventClick()
                }
                if (value) {
                    addClass(document.body, 'showRightPanel')
                } else {
                    removeClass(document.body, 'showRightPanel')
                }
            }
        },
        mounted() {
            this.insertToBody()
        },
        beforeDestroy() {
            const elx = this.$refs.rightPanel
            elx.remove()
        },
        methods: {
            addEventClick() {
                window.addEventListener('click', this.closeSidebar)
            },
            closeSidebar(evt) {
                const parent = evt.target.closest('.rightPanel')
                if (!parent) {
                    this.show = false
                    window.removeEventListener('click', this.closeSidebar)
                }
            },
            //  使用js获取当前元素添加到body
            insertToBody() {
                const elx = this.$refs.rightPanel
                const body = document.querySelector('body');
                body.insertBefore(elx, body.firstChild)
            }
        }
    }
</script>

<style>
    .showRightPanel {
        overflow: hidden;
        position: relative;
        width: calc(100% - 15px);
    }
</style>

<style lang="scss" scoped>
    //  遮罩样式
    .rightPanel-background {
        opacity: 0;
        transition: opacity .3s cubic-bezier(.7, .3, .1, 1);
        background: rgba(0, 0, 0, .4);
        width: 0;
        height: 0;
        top: 0;
        left: 0;
        position: fixed;
        z-index: -1;
    }
    //  左侧容器
    .rightPanel {
        background: #fff;
        position: fixed;
        height: 100vh;
        width: 100%;
        max-width: 260px;
        top: 0;
        box-shadow: 0 0 15px 0 rgba(0, 0, 0, .05);
        transition: all .25s cubic-bezier(.7, .3, .1, 1);
        transform: translate(100%);
        z-index: 40000;
        left: auto;
        right: 0;
    }

    //  展示左侧容器
    .show {
        transition: all .3s cubic-bezier(.7, .3, .1, 1);
        .rightPanel-background {
            z-index: 20000;
            opacity: 1;
            width: 100%;
            height: 100%;
        }

        .rightPanel {
            transform: translate(0);
        }
    }

    //  setting and close btn
    .handle-button {
        position: absolute;
        width: 42px;
        height: 42px;
        line-height: 42px;
        color: #fff;
        border-radius: 6px 0 0 6px !important;
        cursor: pointer;
        pointer-events: auto;
        left: -42px;
        font-size: 24px;
        text-align: center;
        z-index: 0;
        i {
            font-size: 24px;
            line-height: 42px;
        }
    }
</style>
