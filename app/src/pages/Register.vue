<template>
  <div>
    <!-- 装背景图的大盒子 -->
    <div class="reg-container">
        <!-- 注册消息的盒子 -->
        <div class="reg-box">
            <!-- 标题的盒子 -->
            <div class="title-box">后台管理系统</div>
            <!-- 注册的表单域 -->
<el-form ref="form" :model="form" :rules="rulesObj">
  <el-form-item prop="username">
    <el-input placeholder="输入用户名" v-model="form.username"></el-input>
  </el-form-item>
  <el-form-item prop="password">
    <el-input placeholder="输入密码" v-model="form.password"></el-input>
  </el-form-item>
  <el-form-item prop="repassword">
    <el-input placeholder="确认密码" v-model="form.repassword"></el-input>
  </el-form-item>
  <el-form-item >
    <el-button class="btn-reg" type="primary" @click="registerFn">注册</el-button>
    <el-link type="info" disabled>进行登录</el-link>
  </el-form-item>
</el-form>
        </div>
   </div>
  </div>
</template>

<script>
export default {
name:"Register",
data(){
    return{
        form:{
                username:'',
                password:'',
                repassword:''

        },
        rulesObj:{ //表单规则校验对象

        }
    }
},
methods:{
    registerFn(){

    }
}
}
</script>

<style scoped>
.reg-container{
position: absolute;
background: url('../assets/images/bg.png') center;
background-color: aqua;
/* background-size: cover; */
height: 100%;
width: 100%;

}
.reg-box{
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
    padding: 0 30px;
    /* opacity: 0.1; */
}
.title-box{
    height: 60px;
    text-align: center;
    font-size: 30px;
    line-height: 60px;
    color: blueviolet;
}

.btn-reg{
    width: 100%;
}
</style>