<template>
  <div>
    <h2>About组件标题</h2>
    <p>About组件内容</p>
  </div>
</template>

<script>
export default {
  name: "About",
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
  }
}
</script>

<style scoped>

</style>
