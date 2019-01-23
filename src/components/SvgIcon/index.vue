<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
    export default {
        name: 'svg-icon',
        props: {
            iconClass: {
                type: String,
                required: true
            },
            className: {
                type: String
            }
        },
        computed: {
            iconName() {
                return `#icon-${this.iconClass}`
            },
            svgClass() {
                console.log(this.className,1111111111111111)
                if (this.className) {
                    return 'svg-icon ' + this.className
                } else {
                    return 'svg-icon'
                }
            }
        }
    }
</script>

<style scoped>
    .sidebar-container .svg-icon {
        margin-right:10px;
        /* margin-left:10px; */
    }
    .svg-icon {
        width: 20px;
        height: 20px;
        vertical-align: -0.3em;
        fill: currentColor;
        overflow: hidden;
        /*vertical-align: middle;*/
    }

</style>
