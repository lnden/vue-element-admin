<template>
    <section class="FileNameOption">
        <!-- $t is vue-i18n global function to translate lang -->
        <label class="radio-label" style="padding-left:0;">Filename: </label>
        <el-input :placeholder="$t('excel.placeholder')" v-model="filename" style="width:340px;" prefix-icon="el-icon-document"/>
    </section>
</template>

<script>
    /**
     * @author You name (*必填)
     * @date 2019/3/22
     * @desc 组件描述
     * @param {Object} [title]  - 参数说明
     */

    export default {
        name: "FileNameOption",
        props: {
            value: {
                type: String,
                default: ''
            }
        },
        computed: {
            filename: {
                get() {
                    return this.value
                },
                set(val) {
                    this.$emit('input', val)
                }
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .FileNameOption{
        display: inline-block;
        padding-left:20px;
    }
</style>
