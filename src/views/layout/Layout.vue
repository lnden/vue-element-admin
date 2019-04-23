<template>
    <section :class="classObj" class="container">
        <Sidebar class="sidebar-container" />
        <section :class="{hasTagsView:needTagsView}" class="main-container">

            <div :class="{'fixed-header':fixedHeader}">
                <Headerbar />
                <tags-view v-if="needTagsView"/>
            </div>

            <ContentMain />

            <right-panel v-if="showSettings">
                <settings />
            </right-panel>

        </section>
    </section>
</template>

<script>
    import RightPanel from '@/components/RightPanel'
    import { Sidebar, Headerbar, TagsView, ContentMain, Settings } from './components'
    import { mapState } from 'vuex'

    export default {
        name: 'layout',
        data() {
            return {
                name: '布局'
            }
        },
        components: {
            Sidebar,
            Headerbar,
            TagsView,
            ContentMain,
            RightPanel,
            Settings
        },
        computed: {
            sidebar() {
                return this.$store.state.app.sidebar
            },
            showSettings() {
                return this.$store.state.settings.showSettings
            },
            needTagsView() {
                return this.$store.state.settings.tagsView
            },
            ...mapState({
                fixedHeader: state => state.settings.fixedHeader
            }),
            classObj() {
                return {
                    hideSidebar: !this.sidebar.opened,
                    openSidebar: this.sidebar.opened,
                    withoutAnimation: this.sidebar.withoutAnimation,
                    mobile: this.device === 'mobile'
                }
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "~@/styles/public/mixin.scss";
    @import "~@/styles/public/variables.scss";
    .container {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;
        &.mobile.openSidebar{
            position: fixed;
            top: 0;
        }
    }
    .fixed-header {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 9;
        width: calc(100% - #{$sideBarWidth});
        transition: width 0.28s;
    }

    .hideSidebar .fixed-header {
        width: calc(100% - 54px)
    }

    .mobile .fixed-header {
        width: 100%;
    }
</style>
