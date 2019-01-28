<template>
    <section  v-if="!item.hidden&&item.children"  class="menu-wrapper">
        <!-- <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>dashboard</span>
            </template>
            <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
                <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>

            <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
                <el-menu-item index="1-4-2">选项2</el-menu-item>
                <el-menu-item index="1-4-3">选项3</el-menu-item>
                <el-menu-item index="1-4-4">选项4</el-menu-item>
            </el-submenu>
        </el-submenu>

        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">dashboard</span>
        </el-menu-item>

        <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
        </el-menu-item>

        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
        </el-menu-item> -->

        <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
            <app-link :to="resolvePath(onlyOneChild.path)">
                <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
                    <item v-if="onlyOneChild.meta" :icon="onlyOneChild.meta.icon||item.meta.icon" :title="generateTitle(onlyOneChild.meta.title)" />
                </el-menu-item>
            </app-link>
        </template>

        <el-submenu v-else ref="submenu" :index="resolvePath(item.path)">
            <template slot="title">
                <item v-if="item.meta" :icon="item.meta.icon" :title="generateTitle(item.meta.title)" />
            </template>

            <template v-for="child in item.children" v-if="!child.hidden">
                <sidebar-item
                v-if="child.children&&child.children.length>0"
                :is-nest="true"
                :item="child"
                :key="child.path"
                :base-path="resolvePath(child.path)"
                class="nest-menu" />

                <app-link v-else :to="resolvePath(child.path)" :key="child.name">
                    <el-menu-item :index="resolvePath(child.path)">
                        <item v-if="child.meta" :icon="child.meta.icon" :title="generateTitle(child.meta.title)" />
                    </el-menu-item>
                </app-link>
            </template>
        </el-submenu>
    </section>
</template>

<script>

    import path from 'path'
    import { generateTitle } from '@/utils/i18n'
    import { isExternal } from '@/utils'
    import Item from './Item'
    import AppLink from './Link'
    export default {
        name:'sidebaritem',
        props: {
            item: {
                type: Object,
                required: true
            },
            isNest: {
                type: Boolean,
                default: false
            },
            basePath: {
                type: String,
                default: ''
            }
        },
        data(){
            return {
                onlyOneChild: null   
            }
        },
        components: {
            Item,
            AppLink
        },
        methods: {
            hasOneShowingChild(children, parent) {
                const showingChildren = children.filter(item => {
                    if (item.hidden) {
                        return false
                    } else {
                        // Temp set(will be used if only has one showing child)
                        this.onlyOneChild = item
                        return true
                    }
                })

                // When there is only one child router, the child router is displayed by default
                if (showingChildren.length === 1) {
                    return true
                }

                // Show parent if there are no child router to display
                if (showingChildren.length === 0) {
                    this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
                    return true
                }

                return false
            },
            resolvePath(routePath) {
                if (this.isExternalLink(routePath)) {
                    return routePath
                }
                    return path.resolve(this.basePath, routePath)
            },
            isExternalLink(routePath) {
                return isExternal(routePath)
            },
            generateTitle
        }

    }
</script>

<style ref="stylesheet" lang="scss" scoped>
    
</style>
