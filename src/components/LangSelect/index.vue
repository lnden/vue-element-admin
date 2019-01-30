<template>
  <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
    <div class="screenfull-svg">
      <svg-icon class-name="international-icon" icon-class="head-language" />
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item :disabled="language==='zh'" command="zh">中文</el-dropdown-item>
      <el-dropdown-item :disabled="language==='en'" command="en">English</el-dropdown-item>
      <el-dropdown-item :disabled="language==='es'" command="es">Español</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
    export default {
        name:'lang-select',
        computed: {
            language() {
                return this.$store.getters.language
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
        vertical-align: -5px;
    }
</style>
