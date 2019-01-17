<template>
    <section class="loading-container">
        <section class="al-middleTipsModal">
            <figure class="al-loading">
                <img src="@/assets/loading.png" alt="加载中···">
            </figure>
        </section>
    </section>
</template>

<style ref="stylesheet" lang="scss" scoped>
    .loading-container{
        position: fixed;
        top:50%;
        left: 50%;
        margin-left: -55px;
        margin-top: -33px;
        z-index: 18;
        width:110px;
        height:66px;
        .al-middleTipsModal .al-loading img {
            width: 30px;
            height: 30px;
            animation: rotate 1s linear infinite;
            -webkit-animation: rotate 1s linear infinite;
        }
    }
</style>