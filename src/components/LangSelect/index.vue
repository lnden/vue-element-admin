<template>
    <el-dropdown :size="size" :key="size" trigger="click" class="international" @command="handleSetLanguage">
        <div class="screenfull-svg">
            <svg-icon class-name="international-icon" icon-class="head-language" />
        </div>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="item in languageOptions" :key="item.value" :disabled="language===item.value" :command="item.value">{{item.label}}</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
    export default {
        name: 'lang-select',
        data() {
            return {
                languageOptions: [
                    { label: '中文', value: 'zh' },
                    { label: 'English', value: 'en' },
                    { label: 'Español', value: 'es' }
                ]
            }
        },
        computed: {
            language() {
                return this.$store.getters.language
            },
            size() {
                return this.$store.getters.size
            }
        },
        methods: {
            handleSetLanguage(lang) {
                this.$i18n.locale = lang
                this.$store.dispatch('setLanguage', lang)
                this.$message({
                    message: 'Switch Language Success',
                    type: 'success'
                })
            }
        }
    }
</script>

<style ref="stylesheet" lang="scss" scoped>
    .international-icon {
        font-size: 20px;
        cursor: pointer;
        color: #606266;
        width:20px;
        height:20px;
        vertical-align:middle;
    }
</style>
