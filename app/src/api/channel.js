import request from '../utils/request'

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