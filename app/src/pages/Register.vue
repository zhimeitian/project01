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
  <!-- prop和v-model的绑定值对应，prop是校验规则里的属性，v-model是data里的属性 -->
  <el-form-item prop="username">
    <el-input placeholder="输入用户名" v-model="form.username"></el-input>
  </el-form-item>
  <el-form-item prop="password">
    <el-input type="password" placeholder="输入密码" v-model="form.password"></el-input>
  </el-form-item>
  <el-form-item prop="repassword">
    <el-input type="password" placeholder="确认密码" v-model="form.repassword"></el-input>
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
import {registerApi} from '../api/channel'
export default {
name:"Register",
data(){
  	//rule表示要验证的规则,value表示输入值，输入框输入什么值就是什么值,callback回调
  const samePwdFn = (rule,value,callback)=>{
    if(value !== this.form.password){
      callback(new Error("两次输入的密码不一致"))
    }else{
      callback()
    }
  }
    return{
        form:{
                username:'',
                password:'',
                repassword:''

        },
        rulesObj:{ //表单规则校验对象
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
                ],
                // 自定义校验规则validator
                repassword:[
                 {required:true,message:'确认密码',trigger:'blur'},
                 {validator:samePwdFn,trigger:'blur'}
                ]
        }
    }
},
methods:{
    registerFn(){
        this.$refs.form.validate(async valid=>{
          // 表单都不为空时是true
          if(valid){
            // console.log(this.form)
            // 把返回对象里的data字段对应的值保存在res上
            const {data:res} = await registerApi(this.form)
            // console.log(registerApi(this.form))
            // 注册失败，提示用户,$message弹窗提示方法
            if(res.code !==0) return this.$message.error(res.message)
            // 注册成功，提示用户
            this.$message.success(res.message)
            // 路由跳转到登录页面
            this.$router.push('/login')
          }else{
            return false //阻止默认提交行为
          }
        })
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