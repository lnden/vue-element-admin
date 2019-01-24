<template>
    <section class="pdf">
        <code class="distance">{{$t('pdf.tipsone')}}</code>
        <router-link target="_blank" to="download">
            <el-button type="primary">{{$t('pdf.clickbtn')}}</el-button>
        </router-link>
        <!-- <code class="distance">{{$t('pdf.tipstwo')}}</code> -->
        <!-- <el-button type="primary">{{$t('pdf.downloadPdf')}}</el-button> -->
    </section>
</template>

<style ref="stylesheet" lang="scss" scoped>
    .pdf{
        .distance{
            margin-top:20px;
        }
    }
</style>