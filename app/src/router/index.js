import VueRouter from "vue-router";
// 引入用到的模板
import Login from '../pages/Login'
import Register from '../pages/Register'
import Layout from '../pages/layout/Layout'
import store from '../store/index'

//引入所用组件
const routes = [
//   后台管理首页
{
    path:'/index',
    component:Layout
},
{
path:'/reg',
component:Register
},
{
path:'/login',
component:Login
}
]
const router = new VueRouter({
    routes:routes
})

// router.beforeEach((to,from,next)=>{
//   store.dispatch('getUserInfo')
// })

export default router
// 退出登录和重新登录，只走相关组件的代码（不会导致所有的代码重新执行，app.vue不走也就不会再次执行app.vue的代码）