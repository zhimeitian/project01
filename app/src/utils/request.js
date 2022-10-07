
// 基于axios网络请求
import axios  from "axios";
import store from '../store/index'

// 二次封装axios，建立一个新的axios
const myAxios = axios.create({
    // 前缀的地址
    baseURL:'http://big-event-vue-api-t.itheima.net'
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
export default myAxios