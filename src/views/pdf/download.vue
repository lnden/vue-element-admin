<template>
    <section  v-loading.fullscreen.lock="fullscreenLoading" class="main-article" element-loading-text="Efforts to generate PDF">
        <div class="article__heading">
            <div class="article__heading__title"> {{ article.title }}</div>
        </div>
        <div style="color: #ccc;">This article is from Evan You on <a target="_blank" href="https://medium.com/the-vue-point/plans-for-the-next-iteration-of-vue-js-777ffea6fabf">medium</a></div>
        <div ref="content" class="node-article-content" v-html="article.content"/>
    </section>
</template>

<script>
    export default {
        name: 'download',
        data() {
            return {
                article: '',
                fullscreenLoading: true
            }
        },
        mounted() {
            this.fetchData()
    },
        methods: {
            fetchData() {
                import('./content.js').then(res => {
                    const { title } = res.default
                    document.title = title
                    this.article = res.default
                    setTimeout(() => {
                        this.fullscreenLoading = false
                        this.$nextTick(() => {
                            window.print()
                        })
                    }, 3000)
                })
            }
        }
    }
</script>