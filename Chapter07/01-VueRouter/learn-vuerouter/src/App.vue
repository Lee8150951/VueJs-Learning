<template>
  <div id="app">
    <!-- tag属性表示要渲染的标签，默认为a -->
    <!-- replace属性表示禁止浏览器返回 -->
    <!-- active-class,用于配置被点击时的样式 -->
    <router-link to="/home" tag="button" replace>Home</router-link>
    <router-link to="/about" tag="button" replace>About</router-link>
    <!-- 适用对象传参 -->
    <!-- path表示路径，query表示要传的参数 -->
    <router-link :to="{path: '/profile', query: {name: 'Jacob', age: 22, height: 173}}" tag="button" replace>Profile</router-link>
    <router-link :to="/user/+userId" tag="button" replace>User</router-link>
    <router-view></router-view>

    <!-- 另一种方式的切换 -->
    <button @click="homeClick">Home</button>
    <button @click="aboutClick">About</button>

    <!-- 跳转同时传参 -->
    <button @click="userClick">User</button>
    <button @click="profileClick">Profile</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'Jacob'
    }
  },
  methods: {
    homeClick() {
      // console.log('homeClick');
      // 通过代码的方式修改路径(可返回)
      // this.$router.push('/home')
      // 通过代码的方式修改路径(无返回)
      this.$router.replace('/home')
    },
    aboutClick() {
      // console.log('homeClick');
      // 通过代码的方式修改路径(可返回)
      // this.$router.push('/about')
      // 通过代码的方式修改路径(无返回)
      this.$router.replace('/about')
    },
    userClick() {
      // 跳转+传参
      this.$router.push('/user/' + this.userId)
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'Kobe',
          age: 19,
          height: 188
        }
      })
    }
  }
}
</script>

<style>
/* 修改被激活时的样式 */
/*.router-link-active {*/
/*  color: #42b983;*/
/*}*/
.active {
  color: #42b983;
}
</style>
