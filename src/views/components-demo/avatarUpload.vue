<template>
    <section class="components-container">
        <code>This is based on
            <a class="link-type" href="//github.com/dai-siki/vue-image-crop-upload"> vue-image-crop-upload</a>.
            <p>{{ $t('components.imageUploadTips') }}</p>
        </code>
        <pan-thumb :image="image"/>

        <el-button type="primary" icon="upload" style="position: absolute;bottom: 15px;margin-left: 40px;" @click="imagecropperShow=true">Change Avatar</el-button>

        <image-cropper
            v-show="imagecropperShow"
            :width="300"
            :height="300"
            :key="imagecropperKey"
            url="https://httpbin.org/post"
            lang-type="en"
            @close="close"
            @crop-upload-success="cropSuccess"/>
    </section>
</template>

<script>
    import PanThumb from '@/components/PanThumb'
    import ImageCropper from '@/components/ImageCropper'
    export default {
        name: 'avatarUpload',
        components: {
            PanThumb,
            ImageCropper
        },
        data() {
            return {
                imagecropperShow: false,
                imagecropperKey: 0,
                image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191'
            }
        },
        methods: {
            cropSuccess(resData) {
                this.imagecropperShow = false
                this.imagecropperKey = this.imagecropperKey + 1
                this.image = resData.files.avatar
            },
            close() {
                this.imagecropperShow = false
            }
        }
    }
</script>

<style ref="stylesheet" lang="scss" scoped>

</style>
