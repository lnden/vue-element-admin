<template>
    <div :style="{zIndex:zIndex,height:height,width:width}" class="pan-item">
        <div class="pan-info">
            <div class="pan-info-roles-container">
                <slot/>
            </div>
        </div>
        <img :src="image" class="pan-thumb">
    </div>
</template>

<script>
    export default {
        name: 'PanThumb',
        props: {
            image: {
                type: String,
                required: true
            },
            zIndex: {
                type: Number,
                default: 1
            },
            width: {
                type: String,
                default: '150px'
            },
            height: {
                type: String,
                default: '150px'
            }
        }
    }
</script>

<style scoped>
    .pan-item {
        border-radius: 50%;
        display: inline-block;
        position: relative;
        cursor: default;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }

    .pan-info {
        position: absolute;
        width: inherit;
        height: inherit;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: inset 0 0 0 5px rgba(0, 0, 0, 0.05);
    }

    .pan-info-roles-container {
        padding: 20px;
        text-align: center;
    }

    .pan-thumb {
        width: 100%;
        height: 100%;
        background-size: 100%;
        border-radius: 50%;
        overflow: hidden;
        position: absolute;
        /*注释部分为掘金由慢到快转59S*/
        transform-origin: 50% 50%;
        /*transform-origin: 95% 40%;*/
        transition: all 0.3s ease-in-out;

    }


    .pan-item:hover .pan-thumb {
        transition-duration: 59s;
        transform:  rotate(666turn);
        /*transform:  rotate(-110deg);*/
    }


</style>
