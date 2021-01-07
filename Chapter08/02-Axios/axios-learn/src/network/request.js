import axios from "axios";

// export function request(config, success, failure) {
//   // 1.创建axios实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//
//   // 请求回调
//   instance(config).then(res => {
//     // 成功回调
//     success(res)
//   }).catch(error => {
//     // 失败回调
//     failure(error)
//   })
// }

// 最终方案
export function request(config) {
  // 1、创建实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2、配置axios拦截器
  // .request拦截请求
  instance.interceptors.request.use(config => {
    // 请求成功(拦截的就是配置)
    console.log(config)

    // 请求拦截作用一：处理config中一些信息
    // 请求拦截作用二：发送网络请求时接入请求动画
    // 请求拦截作用三：验证登陆信息完善(token)

    // 注意要把config返回出去，否则调用时获取不到config信息
    return config
  }, error => {
    // 请求失败
    console.log(error)
  });

  // .response拦截响应
  instance.interceptors.response.use(res => {
    console.log(res)
    // 一定要返回结果！
    return res.data
  }), error => {
    console.log(error)
  };

  // 3、发送真正的网络请求
  return instance(config)
}
