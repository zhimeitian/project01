import VueRouter from "vue-router";
// 引入用到的模板
import Login from '../pages/Login'
import Register from '../pages/Register'

//引入所用组件
export default new VueRouter({
    routes:[
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