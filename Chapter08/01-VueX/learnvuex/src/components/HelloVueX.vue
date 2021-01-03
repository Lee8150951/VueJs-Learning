<template>
  <div>
    <!-- 原始传值方法 -->
    <h2>{{counter}}</h2>
    <!-- 使用vuex传值 -->
    <h2>{{$store.state.counter_vuex}}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloVueX",
  props: {
    counter: Number
  }
}
</script>

<style scoped>

</style>
