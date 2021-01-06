<template>
  <div id="app">
    <h1>1、传统传值方式</h1>
    <h2>{{counter}}</h2>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
    <!-- 传统的传值方式 -->
    <hello-vue-x :counter="counter"></hello-vue-x>
    <h1>2、使用VueX传值方式</h1>
    <h2>{{$store.state.counter_vuex}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">addStudent</button>
    <h2>{{biggerAge}}</h2>
    <h1><---------vuex数据响应原理----------></h1>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>
    <!-- getters的使用 -->
    <h1>3.getters的使用</h1>
    <h2>{{$store.state.counter_vuex}}</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more40Age}}</h2>
    <h2>{{$store.getters.more40AgeLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(10)}}</h2>
  </div>
</template>

<script>
import HelloVueX from "./components/HelloVueX";
export default {
  name: 'App',
  components: {
    HelloVueX
  },
  data() {
    return {
      message: 'Hello Vue',
      counter: 0
    }
  },
  methods: {
    addition() {
      // this.$store.commit()传入在vuex中定义的方法名
      this.$store.commit('increment')
    },
    subtraction() {
      this.$store.commit('decrement')
    },
    addCount(count) {
      // payload(负载一个参数)
      // 1、普通提交封装
      // this.$store.commit('incrementCount', count)
      // 2、特殊提交封装
      this.$store.commit({
        // type：对应vuex中的mutation事件类型名
        type: 'incrementCount',
        // 数据携带
        count
      })
    },
    // 传一个student对象
    addStudent() {
      // payload(负载一个参数)
      const stu = {id: 114, name: 'Allen', age: 70}
      this.$store.commit('addStudent', stu)
    },
    updateInfo() {
      // this.$store.commit('updateInfo')
      // 异步请求，要执行index中的actions方法(使用dispatch)
      this.$store.dispatch('actionUpdateInfo')
    }
  },
  computed: {
    biggerAge() {
      // 使用filte方法进行对age大于40的人的过滤，用法如下
      return this.$store.state.students.filter(s => {
        return s.age >= 40
      })
    }
  }
}
</script>

<style>
</style>
