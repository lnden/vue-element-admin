<template>
  <transition :name="transitionName">
    <div v-show="visible" :style="customStyle" class="back-to-ceiling" @click="backToTop">
      <svg-icon  class-name="Icon" icon-class="totop"/>
    </div>
  </transition>
</template>

<script>
    export default {
        name: 'BackToTop',
        props: {
            visibilityHeight: {
                type: Number,
                default: 400
            },
            backPosition: {
                type: Number,
                default: 0
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
            if(this.interval) {
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
