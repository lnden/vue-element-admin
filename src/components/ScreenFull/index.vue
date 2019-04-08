<template>
    <div @click="screenfull">
        <svg-icon className="screenfull-icon" :icon-class="isFullscreen" />
    </div>
</template>

<script>
    import screenfull from 'screenfull'
    export default {
        name:'screen-full',
        data(){
            return {
                fullscreen:false
            }
        },
        computed:{
            // Computed is not used here, direct use data
            isFullscreen(val){
                return this.fullscreen ? 'head-fullscreen-exit':'head-fullscreen'
            }
        },
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
        },
        mounted(){
            // methods detects changes in window size,**fullscreen Esc is exit
            let _this = this;
            window.onresize = function(){
                if(!checkFull()){
                    //console.log(11111111111)
                }else{
                    _this.fullscreen = !_this.fullscreen;
                }
            }

            function checkFull(){
                var isFull =  document.fullscreenEnabled || window.fullScreen || document.webkitIsFullScreen || document.msFullscreenEnabled;
                if(isFull === undefined) isFull = false;
                return isFull;
            }
        }
    }
</script>

<style ref="stylesheet" lang="scss" scoped>
    .screenfull-icon {
        display: inline-block;
        cursor: pointer;
        color: #606266;
        width:20px;
        height:20px;
        vertical-align: middle;
    }
</style>
