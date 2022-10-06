import request from '../utils/request'

// 接口请求方法
export const registerApi  = function(){
   return request({
        url:'/api/reg',
        method:'post',
        data:{
            username:'l',
            password:'111111',
            repassword:'111111'
        }
    })
}