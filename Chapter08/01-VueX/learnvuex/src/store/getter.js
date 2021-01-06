export default {
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
}
