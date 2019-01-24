<template>
    <section :style="{height:height+'px',zIndex:zIndex}">
        <div :class="className" :style="{top:stickyTop+'px',zIndex:zIndex,position:position,width:width,height:height+'px'}">
            <slot>
                <div>sticky</div>
            </slot>
        </div>
    </section>
</template>

<script>
    export default {
        name:'stickytop',
        props: {
            stickyTop: {
                type: Number,
                default: 0
            },
            zIndex: {
                type: Number,
                default: 1
            },
            className: {
                type: String,
                default: ''
            }
        },
        data(){
            return {
                active: false,
                position: '',
                width: undefined,
                height: undefined,
                isSticky: false
            }
        },
        mounted(){
            this.height = this.$el.getBoundingClientRect().height;
            window.addEventListener('scroll',this.handleScroll);
            window.addEventListener('resize',this.handleResize);
        },
        activated(){
            this.handleScroll();
        },
        destroyed(){
            window.removeEventListener('scroll',this.handleScroll);
            window.removeEventListener('resize',this.handleResize);
        },
        methods:{
            sticky(){
                if(this.active) return
                this.position = 'fixed';
                this.active = true;
                this.width = this.width + 'px';
                this.isSticky = true;
            },
            reset(){
                if(!this.active) return 
                this.position = '';
                this.width = 'auto';
                this.active = false;
                this.isSticky = false;
            },
            handleScroll(){
                this.width = this.$el.getBoundingClientRect().width;
                const offsetTop = this.$el.getBoundingClientRect().top;
                if(offsetTop < this.stickyTop){
                    this.sticky();
                    return
                }
                this.reset()
            },
            handleResize(){
                if(this.isSticky){
                    this.width = this.$el.getBoundingClientRect().width + 'px'
                }
            }
        }
    }
</script>
