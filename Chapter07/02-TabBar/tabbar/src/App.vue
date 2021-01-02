<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="#d81e06">
        <img slot="item-icon" src="./assets/img/tabbar/Home.svg" alt="Home">
        <img slot="item-icon-active" src="./assets/img/tabbar/Home-active.svg" alt="Home">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="./assets/img/tabbar/Category.svg" alt="Category">
        <img slot="item-icon-active" src="./assets/img/tabbar/Category-active.svg" alt="Category">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <img slot="item-icon" src="./assets/img/tabbar/Shopcart.svg" alt="Shopcart">
        <img slot="item-icon-active" src="./assets/img/tabbar/Shopcart-active.svg" alt="Shopcart">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="./assets/img/tabbar/Profile.svg" alt="Profile">
        <img slot="item-icon-active" src="./assets/img/tabbar/Profile-active.svg" alt="Profile">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
// 导入tabbar组件
import TabBar from "./components/tabbar/TabBar";
import TabBarItem from "./components/tabbar/TabBarItem";

export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
/*引入外部css静态资源*/
@import "./assets/css/base.css";
</style>
