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
    name: "Home",
    data() {
      return {
        path: '/hom/news'
      }
    },
    // 生命周期函数
    created() {
      // 创建组件后回调
      console.log('created');
    },
    mounted() {
      // 将template等物件挂载到dom上后回调
      console.log('mounted');
    },
    updated() {
      // 在界面发生更新后回调
      console.log('updated');
    },
    destroyed() {
      // 销毁后回调
      console.log('destroyed');
    },
    activated() {
      // 活跃时回调
      // 解决展示保存，避免二次渲染的问题
      this.$router.push(this.path);
    },
    beforeRouteLeave (to, from, next) {
      this.path = this.$route.path
      next()
    }
  }
</script>

<style scoped>

</style>
