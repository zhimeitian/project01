import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const state ={
 token:''
}
const mutations = {
 Updatetoken(state,newtoken){
  
    state.token = newtoken
 }
}
export default new Vuex.Store({
    mutations:mutations,
    state:state,
    plugins:[createPersistedState()] //注入持久化插件，在本地持久化保存token
})