import VueRouter from "vue-router";
// 引入用到的模板
import Login from '../pages/Login'
import Register from '../pages/Register'
import Layout from '../pages/layout/Layout'
import store from '../store/index'
import Home from '../pages/home/Home'
import Userinfo from '../pages/user/Userinfo'
import Avator from '../pages/user/Avator'
import Userpwd from '../pages/user/Userpwd'
import Artcate from '../pages/article/Artcate'
import Articlelist from '../pages/article/Articlelist'
//引入所用组件
const routes = [
    //   后台管理首页
    {
        path: '/',
        component: Layout,
        // 重定向到子路由路径上去
        redirect: '/home', //路由重定向，先匹配到了'/'，然后再次匹配到了/home
        children: [
            {
                path: 'home',
                component: Home
            },
            // 修改用户信息的路由
            {
                path: 'user-info',
                component: Userinfo
            },
            // 修改头像的路由
            {
                path: 'user-avatar',
                component: Avator
            },
            // 重置密码的路由
            {
                path: 'user-pwd',
                component: Userpwd
            },
            // 文章分类的路由
            {
                path: 'art-cate',
                component: Artcate
            },
            {
                path:'art-list',
                component:Articlelist
            }
        ]
    },
    {
        path: '/reg',
        component: Register
    },
    {
        path: '/login',
        component: Login
    }
]
const router = new VueRouter({
    routes: routes
})


let whiteList = ['/login', '/reg']  //设置一个白名单（没有登录时可以跳转到的页面）

// 浏览器第一次打开项目的时候会触发一次全局前置路由守卫函数
// 有token就代表登录了
router.beforeEach((to, from, next) => {
    console.log('路由触发了')
    const token = store.state.token
    if (token) {   // 有token的时候
        // 有token没有用户信息我就发送请求获得用户信息
        if (!store.state.userInfo.username) {
            // console.log('调用了')
            store.dispatch('getUserInfo')
            // console.log(token)
        }
        next()
    } else {  //没有token的情况，没有登录
        // 判断跳转的路由的地址是否在白名单路由里
        if (whiteList.includes(to.path)) {
            // 放行（路由前置守卫不会再次触发，而是匹配路由表，让组件挂载）
            next()
        } else {
            // 强制切换路径会再次触发路由守卫
            next('/login')
        }


    }


})

const routerRePush = VueRouter.prototype.push
VueRouter.prototype.push = function (location) {
  return routerRePush.call(this, location).catch(error => error)
}
export default router
// 退出登录和重新登录，只走相关组件的代码（不会导致所有的代码重新执行，app.vue不走也就不会再次执行app.vue的代码）