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
    ],
    info: {
      name: 'Tom',
      height: 1.98,
      age: 52
    }
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
    },
    updateInfo(state) {
      // 修改是存在的值是可以响应式变化的
      state.info.name = 'Jacob'
      // CLI3不响应，但是CLI4已经响应了
      // state.info['address'] = 'ShangHai'
      // 使用Vue的set方法进行加入(内部将其加入了响应式系统)
      // Vue.set(state.info, 'weight', 100)
      // 删除属性也是可以响应的
      // delete state.info.age
      // Vue.delete(state.info, 'name')

      // 模拟异步操作(存在弊端)
      // 推荐不要再mutation中进行异步操作，只能进行同步操作
      // 反例：
      // setTimeout(() => {
      //   state.info.name = 'Jacob'
      // }, 5000)
    }
  },
  // 如果存在任何的异步操作都放在action中进行
  // 跟mutation作用类似，只适用于异步操作处理
  actions: {
    // 此处不再传入state而是传入context(上下文，可以理解成整个$store)
    // 必须这样做
    actionUpdateInfo(context, payload) {
      setTimeout(() => {
        // 不能直接对数据进行操作，而是调用mutation
        context.commit('updateInfo')
        console.log(payload)
      }, 3000)
    }
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
  // 使用modules进行模块化分
  modules: {
    module_a: moduleA,
    module_b: moduleB,
  }
})

// 模块A
const moduleA = {
  // 在使用模块state时$store.state.module_a.***即可
  state: {},
  actions: {},
  // 在使用模块内mutations时依旧使用原来的方式调用(this.$stor.commit('***'))
  // 所以名字不要和主模块mutations方法重复
  mutations: {},
  getters: {}
}

// 模块B
const moduleB = {
  state: {},
  actions: {},
  mutations: {},
  getters: {}
}

// 3.导出Store对象
export default store

