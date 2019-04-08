<template>
    <section class="app-container">
        <!-- 该方法使用window.print()方法进行打印 -->
        <code class="distance">{{$t('pdf.tipsone')}}</code>
        <router-link target="_blank" to="/pdf/download">
            <el-button type="primary">{{$t('pdf.clickbtn')}}</el-button>
        </router-link>

        <!-- 该方法使用npm包进行处理webto -->
        <code class="distance">{{$t('pdf.tipstwo')}}</code>
        <el-button type="primary">{{$t('pdf.downloadPdf')}}</el-button>
    </section>
</template>

<style ref="stylesheet" lang="scss" scoped>
    .app-container{
        .distance{
            margin-top:20px;
        }
    }
</style>
