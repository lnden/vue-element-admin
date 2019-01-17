<template>
    <div class="screenfull-svg" @click="screenfull">
         <svg-icon icon-class="head-full" />
    </div>
</template>

<script>
    import screenfull from 'screenfull'
    export default {
        name:'screen-full',
        methods:{
            screenfull(){
                if (!screenfull.enabled) {
                    this.$message({
                    message: 'you browser can not work',
                    type: 'warning'
                    })
                    return false
                }
                screenfull.toggle()
            }
        }
    }
</script>

<style ref="stylesheet" lang="scss" scoped>
    .screenfull-svg {
        display: inline-block;
        cursor: pointer;
        color: #606266;
    }
</style>