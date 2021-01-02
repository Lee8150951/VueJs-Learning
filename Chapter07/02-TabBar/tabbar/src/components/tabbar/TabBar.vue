<template>
  <div id="tab-bar">
    <!-- 使用插槽抽离 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  /*固定底部*/
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  /*阴影*/
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.1);
}
</style>
