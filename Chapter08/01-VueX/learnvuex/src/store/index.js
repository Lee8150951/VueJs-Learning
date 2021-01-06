import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)
// 2.创建对象
const store = new Vuex.Store({
  // state用于保存状态
  state: {
    counter_vuex: 1000,
    students: [
      {id: 110, name: 'Jacob', age: 22},
      {id: 111, name: 'Bruce', age: 32},
      {id: 112, name: 'Abby', age: 40},
      {id: 113, name: 'James', age: 27}
    ]
  },
  // mutations用于定义方法
  mutations: {
    // 在mutations中的所有方法都默认传入一个state参数(就是上面那个)
    increment(state) {
      state.counter_vuex++
    },
    decrement(state) {
      state.counter_vuex--
    },
    // 获取参数(对应app.vue中的addCount方法，使用mutation特殊封装)
    incrementCount(state, payload) {
      state.counter_vuex += payload.count
    },
    // 接收对象并添加
    addStudent(state, stu) {
      state.students.push(stu)
    }
  },
  actions: {

  },
  // 用于对state数据的处理
  getters: {
    // 获取state数据的平方
    powerCounter(state) {
      return state.counter_vuex * state.counter_vuex
    },
    more40Age(state) {
      return state.students.filter(s => {
        return s.age >= 40
      })
    },
    // 还可以调用其他getters进行使用
    more40AgeLength(state, getters) {
      return getters.more40Age.length
    },
    // 前台vue可以传入值进行使用的情况，在方法内定义一个函数
    moreAgeStu(state) {
      return function (age) {
        return state.students.filter(s => {
          return s.age >= age
        })
      }
    }
  },
  modules: {

  }
})
// 3.导出Store对象
export default store

