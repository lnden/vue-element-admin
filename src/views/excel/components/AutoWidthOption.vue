<template>
    <section class="AutoWidthOption">
        <label class="radio-label">Cell Auto-Width: </label>
        <el-radio-group v-model="autoWidth">
            <el-radio :label="true" border>True</el-radio>
            <el-radio :label="false" border>False</el-radio>
        </el-radio-group>
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
        name: "AutoWidthOption",
        props: {
            value: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            autoWidth: {
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
    .AutoWidthOption{
        display: inline-block;
        padding-left:30px;
        .radio-label{
            color:#666
        }
        .el-radio{
            margin:0px;
        }
    }
</style>
