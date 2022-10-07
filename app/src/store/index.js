import Vue from 'vue'
import Vuex from 'vuex'
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
    state:state
})