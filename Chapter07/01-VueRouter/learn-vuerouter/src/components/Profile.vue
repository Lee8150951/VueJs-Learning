<template>
  <div>
    <h2>Profile组件标题</h2>
    <p>Profile组件内容</p>
    <!-- 获取query内容，对应app.vue中的profile -->
    <h3>姓名：{{$route.query.name}}</h3>
    <h3>年龄：{{$route.query.age}}</h3>
    <h3>身高：{{$route.query.height}}</h3>
  </div>
</template>

<script>
  export default {
    name: "Profile"
  }
</script>

<style scoped>

</style>
