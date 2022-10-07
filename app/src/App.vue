<template>
  <div>
    <!-- 组件挂载点 -->
    <!-- {{created()}} -->
    <router-view></router-view>
  </div>
</template>

<script>
import {getUserApi} from './api/channel'

export default {
 created(){
  this.$store.dispatch('getUserInfo')
 }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

</style>
