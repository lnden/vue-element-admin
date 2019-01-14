<template>
    <section>
        <div>
            {{name}}
        </div>
        <button @click=handlerClickadd>+</button>
        <button @click=handlerClickdelete>-</button>
        展示{{getCount}}
    </section>
</template>

<script>
    import { mapGetters,mapActions } from 'vuex'
    export default {
        name:"vuex-demo",
        data(){
            return {
                name:'我是点击VUEX页面',
                count:6666
            }
        },
        computed:{
            ...mapGetters([
                'getCount',
            ])
        },
        methods:{
            handlerClickadd(){
                this.setCount(this.count++)
            },
            handlerClickdelete(){
                this.setCount(this.count--)
            },
            ...mapActions(['setCount'])
        }
    }
</script>