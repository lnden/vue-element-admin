<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
    export default {
        name:'svg-cion',
        props:{
            iconClass:{
                type:String,
                requires:true
            },
            className:{
                type:String
            }
        },
        computed:{
            iconName(){
                return `#icon-${this.iconClass}`
            },
            svgClass(){
                if(this.className){
                    return 'svg-icon'+this.className
                }else{
                    return 'svg-icon'
                }
            }
        }
    }
</script>

<style scoped>
    .svg-icon {
        width: 20px;
        height: 20px;
        vertical-align: -0.3em;
        fill: currentColor;
        overflow: hidden;
        vertical-align: middle; 
    }
</style>