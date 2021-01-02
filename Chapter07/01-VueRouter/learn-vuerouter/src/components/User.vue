<template>
  <div>
    <h2>User组件标题</h2>
    <p>User组件内容</p>
    <h2>{{userId}}</h2>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed: {
      userId() {
        // 获取当前用户名
        return this.$route.params.userId
      }
    }
  }
</script>

<style scoped>

</style>
