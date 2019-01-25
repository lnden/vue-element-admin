<template>
    <main class="al-mainInner">
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

</style>
