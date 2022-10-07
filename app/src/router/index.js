import VueRouter from "vue-router";
// 引入用到的模板
import Login from '../pages/Login'
import Register from '../pages/Register'

//引入所用组件
export default new VueRouter({
    routes:[
        // 一进去就是登录页面
    {
        path:'/',
        redirect:'/login'
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
    })