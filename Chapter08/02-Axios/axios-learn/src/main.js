// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 使用axios演示
import axios from "axios";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// 使用axios(get)
axios({
  // 访问链接
  // 默认情况下，只写url就是一个get请求
  url: 'http://123.207.32.32:8000/home/multidata',
  // 对get请求的拼接
  params: {
    type: 'pop',
    page: 1
  }
}).then(res => {
  console.log(res)
})

// 使用axios(并发操作)
// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }), axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })]).then(res => {
//   // 两个网络请求都完成后进行一个统一的处理
//   console.log(res)
//   console.log(res[0]);
//   console.log(res[1]);
// })

// 使用全局axios配置，开发中应对不同ip地址问题，使用实例方法
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
//
// axios.all([axios({
//   url: '/home/multidata'
// }), axios({
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })]).then(axios.spread((res1, res2) => {
//   // 使用spread方法可以单独拿到数据
//   console.log(res1)
//   console.log(res2)
// }))

// // 实例方式
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })
//
// // 使用实例
// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res)
// })
//
// // 实例方式
// const instance2 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 6000
// })
//
// instance2({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })

// 调用封装
import {request} from "./network/request";

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(error => {
  console.log(error);
})
