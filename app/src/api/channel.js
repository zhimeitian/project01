import request  from '../utils/request'
import store from '../store/index'
import {homeAxios}from '../utils/request'
// 接口请求方法
// 对象的解构赋值

//从node设置服务器返回表格数据

export const aListAllApi = function(){
  return homeAxios({
    method:'get',
		url:'http://localhost:8082/info'
  })
}

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

//  更新用户头像
export const updateUseravatorApi  = function(avatar){
    return request({
         url:'/my/update/avatar',
        //  默认是get
         method:'patch',
        //  传参给后台：params（查询字符串？和&） data（请求体body） headers（请求头）
        // headers:{
        //     Authorization:store.state.token
        // }
        data:{
            avatar  //头像的base64字符串
        }
     })
 }

 //  更新用户密码
export const updatePwdApi  = function({old_pwd,new_pwd,re_pwd}){
    return request({
         url:'/my/updatepwd',
        //  默认是get
         method:'patch',
        //  传参给后台：params（查询字符串？和&） data（请求体body） headers（请求头）
        // headers:{
        //     Authorization:store.state.token
        // }
        data:{
            old_pwd,
            new_pwd,
            re_pwd
        }
     })
 }

//  获取文章分类
export const getArtcateApi  = function(){
    return request({
         url:'/my/cate/list',
        //  默认是get
         method:'get',
     })
 }
//  添加文章分类
export const addArtCateAPI = ({ cate_name, cate_alias }) => {
    return request({
      url: '/my/cate/add',
      method: 'post',
      data: {
        cate_name, //文章分类名
        cate_alias //文章分类别名
      }
    })
  }
  //更新文章分类列表信息
  export const updateArtCateAPI = ({ id, cate_name, cate_alias }) => {
    return request({
      url: '/my/cate/info',
      method: 'put',
      data: {
        id,
        cate_name,
        cate_alias
      }
    })
  }
  //删除文章分类列表信息：params查询字符串参数（?和&）
  export const delArtCateAPI = (id) => {
    return request({
      url: '/my/cate/del',
      method: 'delete',
      params: {
        id
      }
    })
  }

  // 上传文章
  export const uploadArticleAPI = (fd) => {
    return request({
      url: '/my/article/add',
      method: 'post',
      data: fd //如果传的是个普通对象，axios会把它转成json字符串在请求体里给后台
      // 参数要的是表单对象, 不能写普通对象, axios内部会判断, 如果是表单对象, 传递的请求体会设置Content-Type: form-data与后端对应
    })
  }
  // 获取文章列表
  export const getArticleListAPI = ({ pagenum, pagesize, cate_id, state }) => {
    return request({
      url: '/my/article/list',
      params: {
        pagenum,
        pagesize,
        cate_id,
        state
      }
    })
  }
  // 在文章列表处获取文章详情信息
  export const getArticleDetailAPI = (id) => {
    return request({
      url: '/my/article/info',
      params: {
        id
      }
    })
  }

  //删除文章列表
  export const delArticleAPI = (id) => {
    return request({
      url: '/my/article/info',
      method: 'DELETE',
      params: {
        id
      }
    })
  }