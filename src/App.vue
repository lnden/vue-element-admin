<template>
  <section>
    <router-view></router-view>
  </section>
</template>

<script>
    import vuexdemo from './components/vuex-demo'

    export default {
        name: 'App',
        components: {
            vuexdemo
        }
    }
</script>

<style>
</style>
