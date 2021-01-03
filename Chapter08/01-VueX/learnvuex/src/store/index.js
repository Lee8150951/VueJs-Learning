import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)
// 2.创建对象
const store = new Vuex.Store({
  // state用于保存状态
  state: {
    counter_vuex: 1000
  },
  // mutations用于定义方法
  mutations: {
    // 在mutations中的所有方法都默认传入一个state参数(就是上面那个)
    increment(state) {
      state.counter_vuex++
    },
    decrement(state) {
      state.counter_vuex--
    }
  },
  actions: {

  },
  getters: {

  },
  modules: {

  }
})
// 3.导出Store对象
export default store

