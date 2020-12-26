import axios from 'axios';
import Vue from 'vue';
import qs from 'qs';
console.log(qs);
import store from '../store/store.js'
let vm = new Vue();
export const httpCreate = () => {
  // 创建一个实例，这时的超时时间为系统默认的 0
  const instance = axios.create({
    headers: {
      'Content-Type': ''
    },
  });
  let loadingInstance; //创建Loading 的实例application/x-www-form-urlencoded
  instance.defaults.baseURL = 'https://www.cao.com/'; // 配置axios请求的地址
  instance.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
  instance.defaults.crossDomain = true;
  instance.defaults.withCredentials = true;  //设置cross跨域 并设置访问权限 允许跨域携带cookie信息
  instance.defaults.headers.common['Authorization'] = 'gggggg'; // 设置请求头为 Authorization
  // 请求拦截器
  instance.interceptors.request.use(
    config => {
      // this.$message.error('sdfsdf')
      store.state.isShow = true;
      // 每次发送请求之前判断vuex中是否存在token
      // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
      // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
      const token = window.localStorage.getItem("token");
      token && (config.headers.Authorization = token);
      return config;
    },
    error => {
      vm.$message.error('sdfsdf')
      store.state.isShow = false;
      return Promise.error(error);
    }
  );
  instance.interceptors.response.use(
    response => {
      vm.$message.error('sdfsdf')
      store.state.isShow = false;
      // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
      // 否则的话抛出错误
      if (response.status === 200) {
        return Promise.resolve(response);
      } else {
        return Promise.reject(response);
      }
    },
    // 服务器状态码不是2开头的的情况
    // 这里可以跟你们的后台开发人员协商好统一的错误状态码
    // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
    // 下面列举几个常见的操作，其他需求可自行扩展
    error => {
      console.log(vm.$message);
      vm.$message.error('sdfsdf');
      // store.state.isShow=false;
      if (error.response.status) {
        switch (error.response.status) {
          // 401: 未登录
          // 未登录则跳转登录页面，并携带当前页面的路径
          // 在登录成功后返回当前页面，这一步需要在登录页操作。
          case 401:
            vant.Toast.fail("身份验证失败，请关闭重新进入。");
            break;

          // 403 token过期
          // 登录过期对用户进行提示
          // 清除本地token和清空vuex中token对象
          // 跳转登录页面
          case 403:
            vant.Toast.fail("登录过期，请关闭重新进入。");
            // 清除token
            break;

          // 404请求不存在
          case 404:
            vant.Toast.fail("您访问的网页不存在。");
            break;
          // 其他错误，直接抛出错误提示
          default:
            vant.Toast.fail(error.response.data.message);
        }
        return Promise.reject(error.response);
      }
    }
  );
  return instance
}
export const httpCreateForm = () => {
  // 创建一个实例，这时的超时时间为系统默认的 0
  const instance = axios.create({
    headers: {
      // 'Content-Type': 'application/json'
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  });
  let loadingInstance; //创建Loading 的实例
  instance.defaults.baseURL = 'https://www.httpCreateForm.com/'; // 配置axios请求的地址
  // instance.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
  instance.defaults.crossDomain = true;
  instance.defaults.withCredentials = true;  //设置cross跨域 并设置访问权限 允许跨域携带cookie信息
  instance.defaults.headers.common['Authorization'] = 'sss'; // 设置请求头为 Authorization
  // 请求拦截器
  instance.interceptors.request.use(
    config => {
      // config.data=qs.stringify(config.data);//表单序列化
      // this.$message.error('sdfsdf')
      store.state.isShow = true;
      // 每次发送请求之前判断vuex中是否存在token
      // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
      // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
      const token = window.localStorage.getItem("token");
      token && (config.headers.Authorization = token);
      return config;
    },
    error => {
      vm.$message.error('sdfsdf')
      store.state.isShow = false;
      return Promise.error(error);
    }
  );
  instance.interceptors.response.use(
    response => {
      vm.$message.error('sdfsdf')
      store.state.isShow = false;
      // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
      // 否则的话抛出错误
      if (response.status === 200) {
        return Promise.resolve(response);
      } else {
        return Promise.reject(response);
      }
    },
    // 服务器状态码不是2开头的的情况
    // 这里可以跟你们的后台开发人员协商好统一的错误状态码
    // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
    // 下面列举几个常见的操作，其他需求可自行扩展
    error => {
      console.log(vm.$message);
      vm.$message.error('sdfsdf');
      // store.state.isShow=false;
      if (error.response.status) {
        switch (error.response.status) {
          // 401: 未登录
          // 未登录则跳转登录页面，并携带当前页面的路径
          // 在登录成功后返回当前页面，这一步需要在登录页操作。
          case 401:
            vant.Toast.fail("身份验证失败，请关闭重新进入。");
            break;

          // 403 token过期
          // 登录过期对用户进行提示
          // 清除本地token和清空vuex中token对象
          // 跳转登录页面
          case 403:
            vant.Toast.fail("登录过期，请关闭重新进入。");
            // 清除token
            break;

          // 404请求不存在
          case 404:
            vant.Toast.fail("您访问的网页不存在。");
            break;
          // 其他错误，直接抛出错误提示
          default:
            vant.Toast.fail(error.response.data.message);
        }
        return Promise.reject(error.response);
      }
    }
  );
  return instance
}
export const httpCreateBlob = () => {
  // 创建一个实例，这时的超时时间为系统默认的 0
  const instance = axios.create({
    // headers: {
    //   // 'Content-Type': 'application/json'
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // },
    responseType: 'blob'
  });
  let loadingInstance; //创建Loading 的实例
  instance.defaults.baseURL = 'https://www.httpCreateBlob.com/'; // 配置axios请求的地址
  // instance.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
  instance.defaults.crossDomain = true;
  instance.defaults.withCredentials = true;  //设置cross跨域 并设置访问权限 允许跨域携带cookie信息
  instance.defaults.headers.common['Authorization'] = 'sss'; // 设置请求头为 Authorization
  // 请求拦截器
  instance.interceptors.request.use(
    config => {
      // config.data=qs.stringify(config.data);//表单序列化
      // this.$message.error('sdfsdf')
      store.state.isShow = true;
      // 每次发送请求之前判断vuex中是否存在token
      // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
      // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
      const token = window.localStorage.getItem("token");
      token && (config.headers.Authorization = token);
      return config;
    },
    error => {
      vm.$message.error('sdfsdf')
      store.state.isShow = false;
      return Promise.error(error);
    }
  );
  instance.interceptors.response.use(
    response => {
      vm.$message.error('sdfsdf')
      store.state.isShow = false;
      // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
      // 否则的话抛出错误
      if (response.status === 200) {
        return Promise.resolve(response);
      } else {
        return Promise.reject(response);
      }
    },
    // 服务器状态码不是2开头的的情况
    // 这里可以跟你们的后台开发人员协商好统一的错误状态码
    // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
    // 下面列举几个常见的操作，其他需求可自行扩展
    error => {
      console.log(vm.$message);
      vm.$message.error('sdfsdf');
      // store.state.isShow=false;
      if (error.response.status) {
        switch (error.response.status) {
          // 401: 未登录
          // 未登录则跳转登录页面，并携带当前页面的路径
          // 在登录成功后返回当前页面，这一步需要在登录页操作。
          case 401:
            vant.Toast.fail("身份验证失败，请关闭重新进入。");
            break;

          // 403 token过期
          // 登录过期对用户进行提示
          // 清除本地token和清空vuex中token对象
          // 跳转登录页面
          case 403:
            vant.Toast.fail("登录过期，请关闭重新进入。");
            // 清除token
            break;

          // 404请求不存在
          case 404:
            vant.Toast.fail("您访问的网页不存在。");
            break;
          // 其他错误，直接抛出错误提示
          default:
            vant.Toast.fail(error.response.data.message);
        }
        return Promise.reject(error.response);
      }
    }
  );
  return instance
}

  // export  {instance};