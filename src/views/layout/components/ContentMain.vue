<template>
    <main class="app-main">
        <transition name="fade-transform" mode="out-in">
            <keep-alive :include="cachedViews">
                <router-view :key="key"/>
            </keep-alive>
        </transition>
    </main>
</template>

<script>
    export default {
        name:'contentmain',
        computed:{
            cachedViews() {
                return this.$store.state.tagsView.cachedViews
            },
            key(){
                return this.$route.fullPath
            }
        }
    }
</script>

<style ref="stylesheet" lang="scss" scoped>
    .app-main {
        /*84 = navbar + tags-view = 50为header +34为tagsview */
        min-height: calc(100vh - 50px - 34px);
        position: relative;
        width: 100%;
        /* 隐藏width滚动条 */
        overflow: hidden;
    }
</style>
