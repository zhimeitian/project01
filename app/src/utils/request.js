
// 基于axios疯转网络请求
import axios  from "axios";

const myAxios = axios.create({
    // 前缀的地址
    baseURL:'http://big-event-vue-api-t.itheima.net'
})

export default myAxios