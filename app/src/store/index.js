import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import {getUserApi} from '../api/channel'
Vue.use(Vuex)

const state ={
 token:'',
 userInfo:{}//用户信息（有id， username， nickname，email，user_pic）
}
const mutations = {
 Updatetoken(state,val){
    state.token = val
 },
//  保存用户信息，userinfo不为空
 UpdateUserInfo(state,val){
        state.userInfo = val
 }
}
const actions ={
    // 请求用户信息
 async getUserInfo(context,val){
    const res = await getUserApi()
    context.commit('UpdateUserInfo',res.data.data)
 }
}

const getters={
   nickname:state=>state.userInfo.nickname, //昵称
   username:state=>state.userInfo.username,  //用户名
   user_pic:state=>state.userInfo.user_pic  // 用户头像
}

export default new Vuex.Store({
   getters:getters,
    actions:actions,
    mutations:mutations,
    state:state,
    plugins:[createPersistedState()] //注入持久化插件，在本地持久化保存token
})