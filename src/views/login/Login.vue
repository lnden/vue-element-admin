<template>
    <section class="login-container">
         <transition name="form-fade" mode="in-out">
             <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="rules" ref="loginForm" label-position="left" v-show="showLogin">
               <h3 class="login-title">Login Form</h3>
               <el-form-item prop="username">
                    <span class="svg-container" :class="userstate?'svg-container_user':''">
                        <svg-icon icon-class="login-user"/>
                    </span>
                    <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="请输入用户名" @focus="focus('user')" @blur="blurs('user')"/>
                </el-form-item>

                <el-form-item prop="password">
                    <span class="svg-container" :class="passwordstate?'svg-container_password':''">
                        <svg-icon icon-class="login-password" />
                    </span>
                    <el-input name="password" type="password" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on" placeholder="请输入密码" @focus="focus('password')" @blur="blurs('password')"/>
                    <!--<span class="svg-container" :class="passwordstate?'svg-container_password':''">-->
                        <!--<svg-icon icon-class="login-password" />-->
                    <!--</span>-->
                </el-form-item>
                <el-button class="login-tbn" type="primary" :loading="loading" @click.native.prevent="handleLogin">登录</el-button>
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
              this.loading = true;
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
$cursor: #fff;

.login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background:$bg;
    .login-form {
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -200px;
        margin-top: -200px;
        width: 330px;
        height: 300px;
        padding: 40px;
        background:#fff;
        border-radius:5px;
        text-align: center;
        .login-title{
            font-size: 26px;
            color: $dark_gray;
            font-weight: bold;
            margin:0 auto 30px;
        }
        .el-form-item {
            border: 1px solid $dark_gray;
            border-radius: 5px;
            color: #454545;
            .svg-container {
                color: $dark_gray;
                vertical-align: middle;
                display: inline-block;
                &_user {
                    color:#55ce63;
                }
                &_password{
                    color:#55ce63;
                }
            }
        }
        .login-tbn{
            width:100%;
        }
    }
}

</style>
<style res="stylesheet/scss" lang="scss">
  $bg:#283443;
  $dark_gray:#889aa4;
  $light_gray:#283443;
  $cursor: #000;
  /* reset element-ui css */
  .login-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
      }
    }
  }
</style>
