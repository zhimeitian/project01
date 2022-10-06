<template>
  <div>
      <el-button>你好</el-button>
      <h1>{{create()}}</h1>
  </div>
</template>

<script>
import {registerApi} from './api/channel'

export default {
  methods:{
    async create(){
  const res = await registerApi()
  console.log(res)
}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
