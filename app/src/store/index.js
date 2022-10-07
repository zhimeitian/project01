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
export default new Vuex.Store({
    actions:actions,
    mutations:mutations,
    state:state,
    plugins:[createPersistedState()] //注入持久化插件，在本地持久化保存token
})