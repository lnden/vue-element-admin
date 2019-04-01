<template>
    <el-dropdown :size="size" :key="size" trigger="click" @command="handleSetSize">
        <div>
            <svg-icon className="sizeselect-icon" icon-class="head-size" />
        </div>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="item in sizeOptions" :key="item.value" :disabled="size===item.value" :command="item.value">{{item.label}}</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
    export default {
        name:'size-select',
        data() {
            return {
                sizeOptions: [
                    { label: 'Default', value: 'default' },
                    { label: 'Medium', value: 'medium' },
                    { label: 'Small', value: 'small' },
                    { label: 'Mini', value: 'mini' }
                ]
            }
        },
        computed: {
            size() {
                return this.$store.getters.size
            }
        },
        methods: {
            handleSetSize(size) {
                console.log(size,111)
                this.$ELEMENT.size = size
                this.$store.dispatch('setSize', size)
                this.refreshView()
                this.$message({
                    message: 'Switch Size Success',
                    type: 'success'
                })
            },
            refreshView() {
                // In order to make the cached page re-rendered
                const { fullPath } = this.$route
                this.$nextTick(() => {
                    this.$router.replace({
                         path: '/redirect' + fullPath
                    })
                })
            }
        }
    }
</script>

<style ref="stylesheet" lang="scss" scoped>
    .sizeselect-icon {
        display: inline-block;
        cursor: pointer;
        color: #606266;
        width:20px;
        height:20px;
        vertical-align:middle;
    }
</style>
