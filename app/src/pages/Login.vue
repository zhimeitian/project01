<template>
    <!-- 登录页面的整体盒子 -->
    <div class="login-container">
      <!-- 登录的盒子 -->
      <div class="login-box">
        <!-- 标题的盒子 -->
        <div class="title-box">后台管理系统</div>
        <!-- 登录的表单区域 -->
  <el-form ref="loginRef" :model="loginForm" :rules="loginRules">
    <!-- 用户名 -->
  <el-form-item prop="username">
    <el-input placeholder="输入用户名" v-model="loginForm.username" style="width:340px"></el-input>
  </el-form-item>
  <!-- 密码 -->
  <el-form-item prop="password">
    <el-input type="password" placeholder="输入密码" v-model="loginForm.password" style="width:340px"></el-input>
  </el-form-item>
  <el-form-item >
    <el-button class="btn-login" type="primary" @click="loginFn"  style="width:340px">登录</el-button>
    <br/>
    <el-link type="info" @click="goReg">进行注册</el-link>
  </el-form-item>
</el-form>
      </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {loginApi} from '../api/channel'
export default {
    name:"Login",
    data(){
      return {
            loginForm:{
                username:'',
                password:'',
        },
        loginRules:{ //表单规则校验对象
        // message:""设置不符合校验规则时的提示信息
        // 'blur':失去焦点时触发；
                username:[
                  {required:true,message:'输入用户名',trigger:'blur'},
                  {
                    pattern:/^[a-zA-Z0-9]{1,10}$/,
                    message:'用户名必须是1-10的大小写字母数字',
                    trigger:'blur'
                  }
                ],
                password:[
                   {required:true,message:'输入密码',trigger:'blur'},
                   {
                    pattern:/^\S{6,15}$/,
                    message:'密码必须是6-15的非空字符',
                    trigger:'blur'
                  }
                ]
        }
      }
    },
    methods:{
      //路由跳转到注册页面
      ...mapMutations(['Updatetoken']),
      goReg(){
        this.$router.push('/reg')
      },
      // 登录按钮的点击事件
      loginFn(){
    this.$refs.loginRef.validate(async valid=>{
          // 表单都不为空时是true
          if(valid){
            // console.log(this.loginForm)
            // 对象的解构赋值，把返回对象里的data字段对应的值保存在res上
            const {data:res} = await loginApi(this.loginForm)
            // console.log(res)
                if(res.code !== 0) return this.$message.error(res.message)
                this.$message.success(res.message)
                // console.log(res.token)
                this.Updatetoken(res.token)
                this.$router.push('/')
          }else{
            return false //阻止默认提交行为
          }
        })
      },
    }

}
</script>

<style scoped>
 .login-container{
position: absolute;
background: url('../assets/images/bg.png') center;
background-color: aqua;
/* background-size: cover; */
height: 100%;
width: 100%;

}
.login-box{
    width: 400px;
    height: 335px;
    background-color:#CCB9CC;
    border-radius: 3px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -200px;
    margin-top: -167px;
    box-sizing: border-box;
    box-shadow: 3px;
    padding: 0 30px ;
    /* opacity: 0.1; */
}
.title-box{
    height: 60px;
    text-align: center;
    font-size: 30px;
    line-height: 60px;
    color: blueviolet;
}

.btn-login{
    width: 100%;
}
</style>