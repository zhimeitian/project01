import request from '../utils/request'
import store from '../store/index'
// 接口请求方法
// 对象的解构赋值
// 注册接口的请求
export const registerApi  = function({username,password,repassword}){
   return request({
        url:'/api/reg',
        method:'post',
        data:{
            username:username,
            password:password,
            repassword:repassword
        }
    })
}
// 登录接口的请求
export const loginApi  = function({username,password}){
    return request({
         url:'/api/login',
         method:'post',
         data:{
             username:username,
             password:password,
         }
     })
 }

//  获取用户信息请求
export const getUserApi  = function(){
    return request({
         url:'/my/userinfo',
        //  默认是get
         method:'get',
        //  传参给后台：params（查询字符串？和&） data（请求体body） headers（请求头）
        // headers:{
        //     Authorization:store.state.token
        // }
     })
 }

//  请求获得左侧栏的数据
export const getMenusApi  = function(){
    return request({
         url:'/my/menus',
        //  默认是get
         method:'get',
        //  传参给后台：params（查询字符串？和&） data（请求体body） headers（请求头）
        // headers:{
        //     Authorization:store.state.token
        // }
     })
 }

// 更新用户的信息
export const updateUserinfoApi  = function({id,username,nickname,email,user_pic}){
    return request({
         url:'/my/userinfo',
        //  默认是get
         method:'put',
        //  传参给后台：params（查询字符串？和&） data（请求体body） headers（请求头）
        // headers:{
        //     Authorization:store.state.token
        // }
        data:{
            id,
            username,
            nickname,
            email,
            user_pic
        }
     })
 }