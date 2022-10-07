<template>
  <div class="wai">
<el-container class="main-container">
    <!-- 头部区域 -->
  <el-header>
    <!-- 左侧的logo -->
    <img src="../../assets/images/logo.png" alt="" />
    <!-- 右侧的菜单 -->
<el-menu
  class="el-menu-top"
  mode="horizontal"
  background-color="#23262E"
  text-color="#fff"
  active-text-color="#409EFF"
  >
  <el-submenu index="1">
    <template slot="title">
        <!-- 头像 -->
        <img src="../../assets/images/head.png" alt="" class="avatar">
        <span>个人中心</span>
    </template>
    <el-menu-item index="1-1"><i class="el-icon-s-operation"></i>基本信息</el-menu-item>
    <el-menu-item index="1-2"><i class="el-icon-camera"></i>更换头像</el-menu-item>
    <el-menu-item index="1-3"><i class="el-icon-key"></i>重置密码</el-menu-item>
  </el-submenu>
  <el-menu-item index="2" @click="logoutFn"> <i class="el-icon-switch-button"></i>退出</el-menu-item>
</el-menu>
  </el-header>
  <el-container>
    <!-- 左边侧边栏区域 -->
    <el-aside width="200px">aside</el-aside>
    <el-container>
        <!-- 页面主体位置 -->
      <el-main>Main</el-main>
      <!-- 页脚位置 -->
      <el-footer>© ED</el-footer>
    </el-container>
  </el-container>
</el-container>
  </div>
</template>

<script>
export default {
name:'Layout',
methods:{
  logoutFn(){
    // 组件标签里绑定的都是自定义事件，都需要组件内$emit来触发才行
    // 确认提示框
    this.$confirm('确定退出吗', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 情况token
          this.$store.commit('Updatetoken','')
          // 清除用户信息
          this.$store.commit('UpdateUserInfo',{})
          this.$router.push('/login')
        }).catch(() => {
            
        });
  }
}
}
</script>

<style  scoped>
.wai{
  height: 100%;
}
.main-container {
  position: absolute;
  width: 100%;
  height: 100%;
}
.main-container .el-header,
.main-container  .el-aside {
    background-color: #23262e;
  }
.main-container .el-header {
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
.main-container  .el-main {
    overflow-y: scroll;
    height: 0;
    background-color: #f2f2f2;
  }
.main-container  .el-footer {
    background-color: #eee;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }


.avatar {
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background-color: #fff;
  margin-right: 10px;
  object-fit: cover;
}

/* // 左侧边栏用户信息区域 */
.user-box {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  user-select: none;
}
.user-box  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #fff;
    margin-right: 15px;
    object-fit: cover;
  }
.user-box  span {
    color: white;
    font-size: 12px;
  }


/* // 侧边栏菜单的样式 */
.el-aside .el-submenu,
.el-aside .el-menu-item {
    width: 200px;
    user-select: none;
  }

</style>