<template>
    <main class="app-main"> 
        <transition name="fade-transform" mode="out-in">
            <!-- <keep-alive :include="cachedViews"> -->
            <router-view :key="key"/>
            <!-- </keep-alive> -->
        </transition>
    </main>
</template>

<script>
    export default {
        name:'contentmain',
        computed:{
            key(){
                return this.$route.fullPath
            }
        }
    }
</script>

<style ref="stylesheet" lang="scss" scoped>
    .app-main {
        /*84 = navbar + tags-view = 50 +34 */
        min-height: calc(100vh - 60px);
        position: relative;
        width: 100%;
        /* 隐藏width滚动条 */ 
        overflow: hidden;
    }
</style>
