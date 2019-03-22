<template>
    <section class="BookTypeOption">
        <label class="radio-label">Book Type: </label>
        <el-select v-model="bookType" style="width:120px;" >
            <el-option
                v-for="item in options"
                :key="item"
                :label="item"
                :value="item"/>
        </el-select>
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
        name: "BookTypeOption",
        props: {
            value: {
                type: String,
                default: 'xlsx'
            }
        },
        data() {
            return {
                options: ['xlsx', 'csv', 'txt']
            }
        },
        computed: {
            bookType: {
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
    .BookTypeOption{
        display: inline-block;
        padding-left:30px;
        .radio-label{
            color:#666
        }
    }
</style>
