import request from '../utils/request'

// 接口请求方法
// 对象的解构赋值
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