<template>
  <div>
    <h2>Home组件标题</h2>
    <p>Home组件内容</p>
    <router-link to="/home/news" tag="button">News</router-link>
    <router-link to="/home/message" tag="button">Message</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped>

</style>
