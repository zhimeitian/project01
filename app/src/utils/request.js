
// 基于axios网络请求
import axios  from "axios";
import store from '../store/index'
import router  from "../router/index";
import { Message } from "element-ui";

export const baseURL = 'http://big-event-vue-api-t.itheima.net'
// 二次封装axios，建立一个新的axios实例对象
export const homeAxios = axios.create()

const myAxios = axios.create({
    // 前缀的地址
    baseURL:baseURL
})

// 定义请求拦截器
// api每次请求时都哦会走这个拦截器
myAxios.interceptors.request.use(function (config) {
    // 这个方法会在请求前会发起一次
    if (store.state.token) {  // 进行判断，登陆页面和注册页面的vuex没有token就不需要携带token了
      // 在发起请求时，为请求头挂载 Authorization 字段
      config.headers.Authorization = store.state.token
    }
    // 返回给axios源码，config配置对象（要请求的后台的参数都在这个对象上）
    return config
  }, function (error) {
    // 请求发起前的代码，如果有异常报错，会直接进入这里
    // 返回一个拒绝状态的promise对象，类似于catch函数
    return Promise.reject(error)
    // return返回的是个非promise对象，会作为成功的结果，返回给下一个promise对象
    // return返回的是个promise对象，这个promise对象状态，返回给下一个promise对象
  })
/**
 * return Promise.reject(error)等同于
 * return new Promise((resolve,reject)=>{
 *  reject(error)
 * })
 */

// 响应拦截器
myAxios.interceptors.response.use(function (response) { // 当状态码为2xx/3xx开头的进这里，形参的response是成功的结果
  // 对响应数据做点什么
  return response
}, function (error) { // 响应状态码4xx/5xx进这里是触发失败的回调，形参的error是失败的结果
  // console.dir(error)
  if(error.response.status === 401){
    //token过期了，要清除掉vuex里的一切然后切换到登录页面
    console.log('执行了响应')
    store.commit('Updatetoken','')
    store.commit('UpdateUserInfo',{})
    router.push('/login')
    Message.error('用户身份已经过期了')
  }
  return Promise.reject(error)
})

export default myAxios