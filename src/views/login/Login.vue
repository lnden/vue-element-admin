<template>
    <section class="login-container">
         <transition name="form-fade" mode="in-out">
             <el-form class="login-form" autoComplete="on"  :model="loginForm" :rules="rules"  ref="loginForm" label-position="left" v-show="showLogin">
                <div class="title-container">
                    <img src="../../assets/login-logo.png" alt="">
                </div>
                <el-form-item prop="username">
                    <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="请输入用户名" @focus="focus('user')" @blur="blurs('user')"/>
                    <span class="svg-container" :class="userstate?'svg-container_user':''">
                        <svg-icon icon-class="login-user"/>
                    </span>
                </el-form-item>

                <el-form-item prop="password">
                    <el-input name="password" type="password" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on" placeholder="请输入密码" @focus="focus('password')" @blur="blurs('password')"/>
                    <span class="svg-container" :class="passwordstate?'svg-container_password':''">
                        <svg-icon icon-class="login-password" />
                    </span>
                </el-form-item>

                <el-button type="primary" :loading="loading" @click.native.prevent="handleLogin">登录</el-button>
            </el-form>
         </transition>
    </section>
</template>

<script>
    import { checkUsername,checkPassword } from '@/utils/validate/login'

    export default {
        name:'login',
        data(){
            return {
                showLogin:false,
                loginForm:{
                    username:'',
                    password:''
                },
                 rules:{
                    username: [{ required: true, trigger: 'blur', validator: checkUsername }],
                    password: [{ required: true, trigger: 'blur', validator: checkPassword }],
                },
                userstate:false,
                passwordstate:false,
                loading:false
            }
        },
        methods:{
            handleLogin(){
                this.$refs.loginForm.validate(valid => {
                    if (valid) {
                        alert('可以登录')
                    } else {
                        console.log('error submit!!');
                        return false
                    }
                })
            }
        },
        mounted(){
            this.showLogin = true
        }
    }
</script>

<style res="stylesheet/scss" lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
.login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background:$bg;
    .login-form {
        position: absolute;
        left: 50%;
        top:50%;
        margin-left:-200px;
        margin-top:-200px;
        width: 330px;
        height:330px;
        padding: 36px 36px 16px 36px;
        background:#fff;
        border-radius:5px;
        text-align: center;
        .title-container {
            position: relative;
            margin-bottom: 35px;
        }
        /**/
        .el-form-item {
            background: #fff;
            text-align: left;
            width: 260px;
            border-bottom: 1px solid #99a9bf;
            margin:0 auto;
            margin-bottom: 20px;
            .el-input {
                display: inline-block;
                width: 80%;
                input {
                    background: transparent;
                    border: 0px;
                    -webkit-appearance: none;
                    border-radius: 0px;
                    padding: 12px 5px 12px 15px;
                    color: #f00;
                    height: 47px;
                    &:-webkit-autofill {
                        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
                        -webkit-text-fill-color: #fff !important;
                    }
                }
            }
            .svg-container {
                color: $dark_gray;
                vertical-align: middle;
                display: inline-block;
                float: right;
                &_user {
                    color:#55ce63;
                }
                &_password{
                    color:#55ce63;
                }
            }
        }
        /**/
        .el-button{
            width:154px;
            border-radius:34px;
            margin-top:26px;
        }
    }
}

</style>