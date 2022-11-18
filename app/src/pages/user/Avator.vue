<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>更换头像</span>
      </div>
      <div>
        <!-- 图片，用来展示用户选择的头像 -->
        <img class="the_img" v-if="!this.avatar" src="../../assets/images/avatar.jpg" alt />
        <img class="the_img" v-else :src="this.avatar" alt />

        <!-- 按钮区域 -->
        <div class="btn-box">
          <input
            type="file"
            accept="image/*"
            style="display: none"
            ref="iptRef"
            @change="onFileChange"
          />
          <el-button type="primary" icon="el-icon-plus" @click="chooseImg">选择图片</el-button>
          <el-button type="success" icon="el-icon-upload" :disabled="avatar === ''" @click="uploadFn">上传头像</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import {updateUseravatorApi} from '@/api/channel'
export default {
  name: "Avator",
  data() {
    return {
      avatar: ""
    };
  },
  methods: {
    chooseImg() {
      this.$refs.iptRef.click();
    },
    onFileChange(e) {
      const files = e.target.files; //拿到用户选择的文件数组
      if (files.length === 0) {
        // img标签的src值：
        // 是图片的连接地址（http开头的或者文件的路径）
        // 是图片的base64字符串
      } else {
        // 只能应用在前端这是本地的临时存储地址，返回的是个临时地址，只存在js的内存里而不会发给后台
        // this.avatar =  URL.createObjectURL(files[0])

        // base64字符串
        const fr = new FileReader()
        fr.readAsDataURL(files[0])
        // onload加载完毕后会触发onload事件函数
        fr.onload = (e) =>{  //e是事件对象

            this.avatar = e.target.result
        }

      }
    },
    async uploadFn(){
      const {data:res} =await updateUseravatorApi(this.avatar)
      if(res.code!==0) return this.$message.console.error(res.message);
      this.$message.success("更换用户头像成功")
      // 让vuex里更新用户信息
      this.$store.dispatch('getUserInfo')
    }
  }
};
</script>

<style>
.btn-box {
  margin-top: 10px;
}
.preview {
  object-fit: cover;
}
.the_img {
  width: 350px;
  height: 350px;
}
</style>