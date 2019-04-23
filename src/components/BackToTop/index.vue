<template>
    <transition :name="transitionName">
        <div v-show="visible" :style="customStyle" class="back-to-ceiling" @click="backToTop">
            <svg-icon  class-name="Icon" icon-class="totop"/>
        </div>
    </transition>
</template>

<script>
    /**
     * @desc 返回顶部
     *
     * @param 参数信息
     * 1、visibilityHeight 离开top多少距离显示顶部按钮默认为400
     * 2、backPosition 点击返回按钮返回top多少距离默认为200
     * 3、customStyle样式
     *      1).right 返回按钮位置默认距右边50px
     *      2).bottom 返回按钮位置默认距下边50px
     *      3).width 返回按钮元素宽度默认为40px
     *      4).height 返回按钮元素默认高度为40px
     *      5).'border-radius' 返回按钮元素圆角默认为4px
     *      6).'line-height' 返回按钮元素居中默认为line-height
     *      7).background 返回按钮背景颜色默认为#e7eaf1
     * 4、transitionName 返回按钮展示隐藏动画默认为fade
     */

    export default {
        name: 'BackToTop',
        props: {
            visibilityHeight: {
                type: Number,
                default: 400
            },
            backPosition: {
                type: Number,
                default: 200
            },
            customStyle: {
                type: Object,
                default: function() {
                    return {
                        right: '50px',
                        bottom: '50px',
                        width: '40px',
                        height: '40px',
                        'border-radius': '4px',
                        'line-height': '45px',
                        background: '#e7eaf1'
                    }
                }
            },
            transitionName: {
                type: String,
                default: 'fade'
            }
        },
        data() {
            return {
                visible: false,
                interval: null,
                isMoving: false
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll)
            if (this.interval) {
                clearInterval(this.interval)
            }
        },
        methods: {
            handleScroll() {
                // 是否展示返回顶部 = 页面实时高度 > 设置默认高度值为400,组件传递为300
                this.visible = window.pageYOffset > this.visibilityHeight
            },
            backToTop() {
                if (this.isMoving) return
                const start = window.pageYOffset
                let i = 0
                this.isMoving = true
                this.interval = setInterval(() => {
                    const next = Math.floor(this.easeInOutQuad(10 * i, start, -start, 500))
                    if (next <= this.backPosition) {
                        window.scrollTo(0, this.backPosition)
                        clearInterval(this.interval)
                        this.isMoving = false
                    } else {
                        window.scrollTo(0, next)
                    }
                    i++
                }, 16.7)
            },
            // https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
            easeInOutQuad(t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t + b
                return -c / 2 * (--t * (t - 2) - 1) + b
            }
        }
    }
</script>

<style scoped>
    .back-to-ceiling {
        position: fixed;
        display: inline-block;
        text-align: center;
        cursor: pointer;
    }

    .back-to-ceiling:hover {
        background: #d5dbe7;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0
    }

    .back-to-ceiling .Icon {
        fill: #9aaabf;
        background: none;
        vertical-align: 0;
    }
</style>
