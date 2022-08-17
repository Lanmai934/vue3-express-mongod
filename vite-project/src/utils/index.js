import axios from "axios";
import QS from "qs";

//设置超时时间
axios.defaults.timeout = 10000;
// post请求头
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";
//请求携带cookie
//axios.defaults.withCredentials = true;

//对外接口
export default function http(method, url, params) {
  if (method.toUpperCase() == "GET") {
    return get(url, params);
  } else if (method.toUpperCase() == "POST") {
    return post(url, params);
  }
}

// 封装get方法
function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, params)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

// 封装post方法
function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, QS.stringify(params))
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

//请求的拦截器
axios.interceptors.request.use(
  function (response) {
    //console.log("请求执行之前",response)
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

//响应的拦截器
axios.interceptors.response.use(
    (response) => {
      //console.log("响应处理之前",response);
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export const LunboUrl = "/api/lunbo/find"; //GET
export const From= "/api/suggest/add"; //Post 游客留言
export const Furniture= "/api/goods/find"; //get
export const Login= "/api/login"; //post 登录
export const Regin= "/api/register"; //post 注册
export const Usershop= "/api/carts/post"; //post 提交订单
export const test= "/api/carts/post1"; //post
export const admin_login= "/api/admin/login"; //post 管理员登录

//商品增删查改
export const goods_add= "/api/goods/add"; //post
export const goods_delete= "/api/goods/delete/:id"; //post
export const goods_find= "/api/goods/find"; //post
export const goods_chage= "/api/goods/chage"; //post

//游客预约查看增删查改
export const suggest_add= "/api/suggest/add"; //post
export const suggest_delete= "/api/suggest/delete"; //post
export const suggest_find= "/api/suggest/find"; //post
export const suggest_chage= "/api/suggest/chage"; //post

//订单增删查改
export const carts_add= "/api/carts/add"; //post
export const carts_delete= "/api/carts/delete"; //post
export const carts_find= "/api/carts/find"; //post
export const carts_chage= "/api/carts/chage"; //post

