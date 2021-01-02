<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    // 分配跳转路径(从app.vue组件中获取)
    path: String,
    activeColor: {
      type: String,
      default: '#d81e06'
    }
  },
  computed: {
    isActive() {
      // $route是指处于活跃状态路由
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>

.tab-bar-item {
  /*均匀分布*/
  flex: 1;
  text-align: center;
  /*tabbar一般来说是49px*/
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  height: 30px;
  width: 30px;
  /*去除图片底部空隙*/
  vertical-align: middle;
}
</style>
