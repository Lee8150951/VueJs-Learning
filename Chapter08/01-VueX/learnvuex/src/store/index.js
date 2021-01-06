import Vue from 'vue'
import Vuex from 'vuex'
// 引入action
import action from "./action";
// 引入getter
import getter from "./getter";
// 引入mutation
import mutation from "./mutation";

// 1.安装插件
Vue.use(Vuex)
// 2.创建对象
const store = new Vuex.Store({
  state,
  mutation,
  action,
  getter,
  // 使用modules进行模块化分
  modules: {
  }
})

const state = {
  counter_vuex: 1000,
  students: [
    {id: 110, name: 'Jacob', age: 22},
    {id: 111, name: 'Bruce', age: 32},
    {id: 112, name: 'Abby', age: 40},
    {id: 113, name: 'James', age: 27}
  ],
  info: {
    name: 'Tom',
    height: 1.98,
    age: 52
  }
}

// 3.导出Store对象
export default store

