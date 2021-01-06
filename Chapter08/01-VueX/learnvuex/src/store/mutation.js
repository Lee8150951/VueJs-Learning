export default {
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
}
