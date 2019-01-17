<template>
    <section>
        <Headerbar />
        <Sidebar />
        <ContentMain />
    </section>
</template>

<script>
    import { Headerbar,Sidebar,ContentMain} from './components'
    export default {
        name:"layout",
        data(){
            return {
                name:'布局'
            }
        },
        components:{
            Headerbar,
            Sidebar,
            ContentMain
        }
    }
</script>