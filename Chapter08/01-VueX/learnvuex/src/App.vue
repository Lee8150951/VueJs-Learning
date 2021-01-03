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
    }
  }
}
</script>

<style>
</style>
